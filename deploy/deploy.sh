docker build -t klimentru1986/kubernatestodo-client:latest -t klimentru1986/kubernatestodo-client:$GIT_SHA ./frontend/.
docker build -t klimentru1986/kubernatestodo-api:latest -t klimentru1986/kubernatestodo-api:$GIT_SHA ./backend/.

docker push klimentru1986/kubernatestodo-client
docker push klimentru1986/kubernatestodo-api

kubectl apply ./deploy/k8s/.

kubectl set image deployments/api-deployment api=klimentru1986/kubernatestodo-api:$GIT_SHA
kubectl set image deployments/client-deployment client=klimentru1986/kubernatestodo-client:$GIT_SHA