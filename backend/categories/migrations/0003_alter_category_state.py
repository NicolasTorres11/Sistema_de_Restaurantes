# Generated by Django 4.2.3 on 2023-08-12 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0002_alter_category_options_category_state_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='state',
            field=models.BooleanField(default=True, verbose_name='Estado'),
        ),
    ]