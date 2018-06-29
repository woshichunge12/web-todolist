		var ls={
			savels(key,value){
						localStorage.setItem(key,JSON.stringify(value));
					},
			getls(key){
						return JSON.parse(localStorage.getItem(key))||[];
					}
				}
			var ro=ls.getls("r");
			var	rot=ls.getls("rt");

		var vue =new Vue({
			el:'#app',
			data:{
				search:'',
				rows:ro,
				rowstoday:rot,
				rowtemplate:{tname:'',deadline:'',priority:'',tip:'',sign:0}
				},
			methods:{
				save:function(index){
					this.rows.push(this.rowtemplate);
					this.rowtemplate={tname:'',deadline:'',priority:'',tip:'',sign:0};
					
				},
				deleteMatter:function(index){
					this.rows.splice(index,1);
				},
				
				
				saveIntomydate:function(index){
					this.rowstoday.push(this.rows[index]);
					this.rows.splice(index,1)
				},
				
				setcomp:function(index){
					this.rows[index].sign=1;
				},	
				setTodaycomp:function(index){
					this.rowstoday[index].sign=1;
				},
				deleteTodays:function(index) {
					this.rowstoday.splice(index,1)
				},
				delaysetcomp:function(index){
					this.rows[index].sign=2;
				},
				delayTodaycomp:function(index){
					this.rowstoday[index].sign=2;
				},
				DenyTodaycomp:function(index){
					if(this.rowstoday[index].sign==1)
						this.rowstoday[index].sign=0;
				},
				NoDenyTodaycomp:function(index){
					if(this.rowstoday[index].sign==2)
						this.rowstoday[index].sign=0;
				},
				Denycomp:function(index){
					if(this.rows[index].sign==1)
						this.rows[index].sign=0;
				},
				NoDenycomp:function(index){
					if(this.rows[index].sign==2)
						this.rows[index].sign=0;
				}
			},
			watch:{
					rows:{
						handler:function(){
							ls.savels('r',this.rows);
						},
						deep:true
					},
					rowstoday:{
						handler:function(){
							ls.savels('rt',this.rowstoday);
						},
						deep:true	
					}
			},
			computed: {
           		 searchData: function() {
               		 var search = this.search;
               		 if (search) {
                   		 return this.rows.filter(function(roww) {
                        		return Object.keys(roww).some(function(key) {
                           			 return String(roww[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                    
                }
                return this.rows;
            }
        	}
		});
	
	$(function () { $('#collapseTwo').collapse('hide')});
	$(function () { $('#collapseOne').collapse('hide')});

/*	var ls={
		savels(key,value){
			localStorage.setItem(key,JSON.stringify(value));
		},
		getls(key){
			return JSON.parse(localStorage.getItem(key))||[];
		}
	}
	var rows=ls.getls("r");
	var	rowstoday=ls.getls("rt");*/
	
	/*function saveInHere(){  
    var rowtemplate = new Object;
    rowtemplate.tname = document.getElementById("tname").value; 
    rowtemplate.priority = document.getElementById("priority").value;
    rowtemplate.deadline = document.getElementById("deadline").value;  
    rowtemplate.tip = document.getElementById("tip").value;
    rowtemplate.sign=0;
    var str = JSON.stringify(rowtemplate); 
    localStorage.setItem(rowtemplate.tname,str);  
    alert("保存成功");
    localStorage.getItem(vm.rows);
}  */