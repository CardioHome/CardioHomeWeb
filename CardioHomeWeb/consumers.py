from channels.generic.websocket import AsyncJsonWebsocketConsumer
from channels.consumer import AsyncConsumer
from django.core.cache import cache
import asyncio

import time
import random

class PatientDataConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        # Called on connection. Either call
        await self.accept()
        self.sending = True
        self.hr = 99

    async def receive_json(self, content, **kwargs):
        # Called with either text_data or bytes_data for each frame
        # You can call:
        print(content)
        while self.sending:
            self.hr = cache.get_or_set('hr', 100)
            await self.send_json({
                'hr': self.hr
            })
            await asyncio.sleep(3)

    async def disconnect(self, close_code):
        # Called when the socket closes
        self.sending = False
        print('disconnect')

class SendPatientDataConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        # Called on connection. Either call
        await self.accept()


    async def receive_json(self, content, **kwargs):
        # Called with either text_data or bytes_data for each frame
        # You can call:
        cache.set('hr', content['hr'])
        print(cache.get('hr'))


    async def disconnect(self, close_code):
        # Called when the socket closes
        print('disconnect')