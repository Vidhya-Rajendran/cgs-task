from rest_framework import serializers
from formgroup.models import FormGroup


class FormGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormGroup
        fields = ("name", "email", "ph_no", "dob", "msg", "url")

    def create(self, validated_data):
        form = FormGroup.objects.create(**validated_data)
        return form

