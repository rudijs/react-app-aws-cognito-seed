aws cognito-idp sign-up \
 --region ap-southeast-1 \
 --client-id 6h94c8ma6mrrkjpavdr7kajmp4 \
 --username admin@example.com \
 --password Passw0rd!

aws cognito-idp admin-confirm-sign-up \
 --region ap-southeast-1 \
 --user-pool-id ap-southeast-1_EukDsAAHb \
 --username admin@example.com

aws cognito-idp create-group --user-pool-id ap-southeast-1_EukDsAAHb --group-name admin2

aws cognito-idp admin-add-user-to-group --user-pool-id ap-southeast-1_EukDsAAHb --group-name admin2 --username admin@example.com
