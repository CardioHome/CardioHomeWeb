from django.conf.urls import url
from channels.routing import ProtocolTypeRouter, URLRouter

from .consumers import *


wbApplication = URLRouter([
    url(r'^patient_data', PatientDataConsumer),
    url(r'^send_patient_data', SendPatientDataConsumer)
])

application = ProtocolTypeRouter({
    # Empty for now (http->django views is added by default)
    'websocket': wbApplication
})