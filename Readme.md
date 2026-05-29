# VectorShift Pipeline Builder

A workflow/pipeline builder developed as part of the VectorShift Frontend Technical Assessment.

## Features

* Reusable BaseNode abstraction for scalable node creation
* Five additional custom nodes (API, Filter, Math, Delay, Email)
* Modern and consistent UI styling
* Dynamic Text Node resizing
* Automatic variable detection using `{{variable}}` syntax
* Dynamic handle generation based on detected variables
* React Flow-based visual pipeline editor
* FastAPI backend integration
* Pipeline analysis including:

  * Node count
  * Edge count
  * Directed Acyclic Graph (DAG) validation using topological sorting

## Tech Stack

Frontend:

* React
* React Flow
* Axios

Backend:

* FastAPI
* Python

## Running the Project

Frontend:

1. Navigate to the frontend directory
2. Run `npm install`
3. Run `npm start`

Backend:

1. Navigate to the backend directory
2. Install dependencies using `pip install fastapi uvicorn`
3. Run `python -m uvicorn main:app --reload`

Frontend runs on `http://localhost:3000`

Backend runs on `http://127.0.0.1:8000`
