
# database config
kubectl apply -f ./k8s/database-persistent-volume-claim.yaml
kubectl apply -f ./k8s/postgres-cluster-ip-service.yaml
kubectl apply -f ./k8s/postgres-deployment.yaml

# frontend config
kubectl apply -f ./k8s/client-cluster-ip-service.yaml
kubectl apply -f ./k8s/client-deployment.yaml

# backend config
kubectl apply -f ./k8s/api-cluster-ip-service.yaml
kubectl apply -f ./k8s/api-deployment.yaml

# avaliable services
kubectl get pods
kubectl get services

# deployment details
kubectl describe deployment postgres-deployment
kubectl describe deployment client-deployment
kubectl describe deployment api-deployment



