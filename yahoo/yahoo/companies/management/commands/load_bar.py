import json
from django.core.management.base import BaseCommand, CommandError
from yahoo.companies.models import Category

class Command(BaseCommand):
    help = 'Load category data into the database'

    def add_arguments(self, parser):
        parser.add_argument('data_json', type=str)

    def handle(self, *args, **options):
        json_path = options['data_json']

        # by_country = json.load(open(json_path, encoding="utf-8"))

        self.stdout.write(self.style.SUCCESS('Loading JSON from "{}"'.format(json_path)))
        data = json.load(open(json_path))

        # Track the total number of records
        total = len(data)

        # Let the user know we're running
        self.stdout.write(self.style.SUCCESS('Processing {} rows'.format(total)))

        skipped = []

        for i, row in enumerate(data):

            # if not company_category or not frequency:
            #     skipped.append(row)
            #     continue

            category, _ = Category.objects.get_or_create(
                company_category=row['Category'],
                frequency=row['Freq'],
            )

            self.stdout.write(self.style.SUCCESS('Processed {}/{}'.format(i + 1, total)), ending='\r')
            # We call flush to force the output to be written
            self.stdout.flush()

        if skipped:
            self.stdout.write(self.style.WARNING("Skipped {} records".format(len(skipped))))
            with open('skipped.json', 'w') as fh:
                json.dump(skipped, fh)
