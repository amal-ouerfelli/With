# Generated by Django 3.1.5 on 2022-03-09 19:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('With', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('idProfile', models.AutoField(db_column='idProfile', primary_key=True, serialize=False)),
                ('HomeTown', models.CharField(db_column='HomeTown', max_length=255)),
                ('Gender', models.CharField(choices=[('F', 'Female'), ('M', 'Male')], db_column='Gender', max_length=6)),
                ('Age', models.IntegerField(db_column='Age')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='With.user')),
            ],
            options={
                'db_table': 'profile',
            },
        ),
    ]
