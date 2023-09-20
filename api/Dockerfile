FROM python:3.11.5-slim
LABEL maintainer="Bruce Schultz"

RUN apt-get update && apt-get install -y --no-install-recommends git nano cron && pip install --upgrade pip

COPY requirements_dev.txt .
RUN pip install -r requirements_dev.txt

RUN mkdir zetomapapi
WORKDIR /zetomapapi
COPY . .
RUN pip install . && zetomap build

EXPOSE 5000

ENTRYPOINT zetomap serve
