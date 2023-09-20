# ZET-O-MAP 
An AOP network visualizer and prediction tool for the ZET-O-MAP project. The live version can be found at https://db.zet-o-map.scaiview.com/

## Deployment
Two Docker containers can be built and deployed using the `docker-compose.yml` located in this root directory and executing `docker-compose up -d`. The GUI will be available at http://localhost:8080.

## Components
### API
The API used by the frontend was built using Python and FastAPI and compiles a backend SQLlite database by querying the zetomap knowledge graph available at https:/graphstore.scai.fraunhofer.de.

After installing the API package, you can build the database using
```bash
zetomap build
```

and then run the API using 
```bash
zetomap serve
```
The API will then be available at http://localhost:5000/docs

### Frontend
The GUI was built using React and Nodejs 16. Install the node modules using
```bash
npm install --legacy-peer-deps
```

and then start the frontend using
```bash
npm run serve
```