# Python Base
FROM python:3.9-slim as base

# Disable buffering
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /backend

# Upgrade pip
RUN pip install --upgrade pip

# Copy requirements.txt
COPY requirements.txt /backend/

# Install required packages
RUN pip install -r requirements.txt

# Copy source
# TODO: exclude frontend
COPY . .

# Migrate
RUN python manage.py migrate

# Populate movies
RUN python manage.py populateMovies
