from django.db import migrations, models
import django.db.models.deletion
"""
    name = models.CharField(max_length=50, null=False)
    lastname = models.CharField(max_length=50, null=True)
    parent = models.ForeignKey(
        'parents.Parent',
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
"""
class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('parents', '0001_initial')
    ]

    operations = [
        migrations.CreateModel(
            name='Baby',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('lastname', models.CharField(max_length=50)),
                ('parent', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='parents.Parent')),
            ],
        ),
    ]