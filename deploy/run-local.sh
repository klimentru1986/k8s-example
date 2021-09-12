
# database config
kubectl apply -f database-persistent-volume-claim.yaml
kubectl apply -f postgres-cluster-ip-service.yaml
kubectl apply -f postgres-deployment.yaml

# frontend config
kubectl apply -f client-cluster-ip-service.yaml
kubectl apply -f client-deployment.yaml

# backend config
kubectl apply -f api-cluster-ip-service.yaml
kubectl apply -f api-deployment.yaml

# avaliable services
kubectl get pods
kubectl get services

# deployment details
kubectl describe deployment postgres-deployment
kubectl describe deployment client-deployment
kubectl describe deployment api-deployment



