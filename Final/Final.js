function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
   
    screen.init( volume, {
	width: window.innerWidth*0.8,
	height: window.innerHeight*0.8,
	targetDom: document.getElementById('display'),
	enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    // var isovalue = 128;
    var point = new THREE.Vector3(60,60,17);
    var normal = new THREE.Vector3(0,0,1);
    var surfaces = SlicePlane( volume, point, normal );
    screen.scene.add( surfaces );
    
    var x;
    var y;
    var z;

    x=document.getElementById('x').value;
    document.getElementById('labelx').innerHTML="x:"+x;

    y=document.getElementById('y').value;
    document.getElementById('labely').innerHTML="y:"+y;

    z=document.getElementById('z').value;
    document.getElementById('labelz').innerHTML="z:"+z;
   
    
    document.getElementById('x').addEventListener('mousemove',function(){
 	x=document.getElementById('x').value;
	document.getElementById('labelx').innerHTML="x:"+x;
    });
     document.getElementById('y').addEventListener('mousemove',function(){
	y=document.getElementById('y').value;
	document.getElementById('labely').innerHTML="y:"+y;
     });
     document.getElementById('z').addEventListener('mousemove',function(){
	z=document.getElementById('z').value;
	document.getElementById('labelz').innerHTML="z:"+z;
    }); 
    
    document.getElementById('xyz').addEventListener('click',function(){
	screen.scene.remove(surfaces);
	 var x=document.getElementById('x').value;
	 var y=document.getElementById('y').value;
	 var z=document.getElementById('z').value;

	var normal =  new THREE.Vector3(x,y,z);
	surfaces = SlicePlane( volume, point, normal );
	screen.scene.add( surfaces );
    });
    
    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });
    
    window.addEventListener( 'resize', function() {
	screen.resize([ window.innerWidth*0.8, window.innerHeight*0.8 ]);
    });
    
    screen.loop();
}

function refresh() {
    window.location.reload();
}
