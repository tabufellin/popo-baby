from django.db import migrations, models
import django.db.models.deletion
"""    event_type = models.CharField(max_length=20, null=False),
    dateTime = models.DateTimeField(auto_now=True),
    notes = models.CharField(max_length=200, null=True)
    baby = models.ForeignKey(
        'babys.Baby',
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
"""


class Migration(migrations.Migration):

    dependencies = [
        ('babys', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dateTime', models.DateTimeField(auto_now=True)),
                ('event_type', models.CharField(max_length=20, null=False)),
                ('notes', models.CharField(max_length=200, null=True)),
                ('baby', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='babys.Baby')),
            ],
        ),
    ]