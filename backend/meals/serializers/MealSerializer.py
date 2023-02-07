from rest_framework import serializers

from meals.models import Meal


class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ('name', 'category', 'recipe', 'photo')
