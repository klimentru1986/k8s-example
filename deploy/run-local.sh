# Применение файлов конфигурации
kubectl apply -f client-deployment.yaml
kubectl apply -f client-node-port.yaml

# Получение списка подов и сервисов
kubectl get pods
kubectl get services

# Детальная инфонмация о текущем поде
kubectl describe pod client-pod


minikube service client-node-port
