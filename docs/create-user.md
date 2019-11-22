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

Mobx

https://bitbucket.org/kineticdev/ssv-campaign/commits/f13cd53244b4f7e4fe5d6108d2ec4918223ffbdd?at=frontend-state

User Pool ID and Add user to group serverless

https://serverless-stack.com/chapters/mapping-cognito-identity-id-and-user-pool-id.html

https://bitbucket.org/kineticdev/ssv-campaign/src/82455fc6076fc225444a9ff0a96e707bf4f5512e/src/api/functions/user-group.js?at=frontend-state
