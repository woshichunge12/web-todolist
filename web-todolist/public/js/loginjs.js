 window.addEventListener('load',function(){
             
            var form = document.forms[0];
 
            form.addEventListener('submit',function(e){
             
                e.preventDefault();
                 
                var userName = form.userName.value;
                var pwd = form.pwd.value;
                 
                var userInfo = JSON.parse(localStorage.getItem(userName));
                 
                if(userInfo && userInfo.pwd === pwd)
				{
					location.href = 'exp444.html';
					return alert('登录成功!');
				} 
				else
				{     
                	alert('登录失败 请先注册!');
                } 
            });
             
            document.getElementsByTagName('button')[0].addEventListener('click',function(e){
                 
                e.preventDefault();
                 
                location.href = 'regist.html';
                 
            });
        });