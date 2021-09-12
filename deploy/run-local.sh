# Конфигурирование клиентского приложения
kubectl apply -f client-cluster-ip-service.yaml
kubectl apply -f client-deployment.yaml

# Конфигурирование приложения АПИ
kubectl apply -f api-cluster-ip-service.yaml
kubectl apply -f api-deployment.yaml

# Получение списка подов и сервисов
kubectl get pods
kubectl get services

# Детальная инфонмация о текущем поде
kubectl describe deployment client-deployment
kubectl describe deployment api-deployment



