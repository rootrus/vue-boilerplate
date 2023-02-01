export default{
     account: {
         statement: {
             url: '/account/statement',
             method: 'GET',
         },
         editUserProfile: {
             url:'/account/profileSave',
             method: 'POST',
         },
         saveDeposit: {
             url:'/account/recharge/save',
             method: 'POST',
         },
         saveWithdraw: {
             url:'/account/withdraw/save',
             method: 'POST',
         },
         deleteDeposit: {
             url:'/account/recharge/cancel',
             method: 'GET',
         },
         saveBank: {
             url:'/account/bankSave',
             method: 'POST',
         },
     },
     main: {
         login: {
             url:'/doLogin',
             method: 'POST',
         }
     }
 }
 