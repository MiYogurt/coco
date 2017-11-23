# coco forum

## how to run

1. install deps

```bash
cd front && yarn
cd ../parse-server && yarn
```

2. build parse-server images

```bash
docker-compose build .
```


3. run the docker service

```bash
docker-compose up -d
```

4. open dashbord on `http://0.0.0.0:4040`

5. open front web page on `http://0.0.0.0:8080`


## how to stop

```bash
docker-compose stop
```
