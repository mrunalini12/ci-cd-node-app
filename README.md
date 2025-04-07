 # 🚀 CI/CD Node.js App with Docker & GitHub Actions

This is a sample Node.js application integrated with a complete CI/CD pipeline using **GitHub Actions** and **Docker**.  
The pipeline builds a Docker image and pushes it to Docker Hub automatically on every commit to the `master` branch.

---

## 📁 Project Structure

. ├── Dockerfile ├── index.js ├── package.json ├── package-lock.json └── .github/ └── workflows/ └── main.yml


---

## ⚙️ Tech Stack

- **Node.js** – Backend Framework  
- **Docker** – Containerization  
- **GitHub Actions** – CI/CD Workflow  
- **Docker Hub** – Image Repository  

---

## 🔄 CI/CD Pipeline Steps

1. Trigger on push to `master` branch  
2. Checkout code  
3. Login to Docker Hub (via GitHub secrets)  
4. Build Docker image  
5. Push image to Docker Hub  

---

## 🐳 Docker Image

- **Docker Hub Repo**:  
  👉 [mrunalini01/ci-cd-node-app](https://hub.docker.com/r/mrunalini01/ci-cd-node-app)

- **Run Locally**:

```bash
docker pull mrunalini01/ci-cd-node-app
docker run -p 3000:3000 mrunalini01/ci-cd-node-app
Then open http://localhost:3000 in your browser.
GitHub Secrets Used
Secret Name	Purpose
DOCKER_USERNAME	Your Docker Hub username
DOCKER_PASSWORD	Docker Hub access token

Author
Mrunalini
https://github.com/mrunalini12


