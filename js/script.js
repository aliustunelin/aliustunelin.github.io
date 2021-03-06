var panorama, panorama2, panorama3, panorama4, viewer, container, infospot;

var lookAtPositions = [
  new THREE.Vector3(4871.39, 1088.07, -118.41),
  new THREE.Vector3(1278.27, 732.65, 4769.19),
  new THREE.Vector3(0, 0 , 0),
];

var infospotPositions = [
  new THREE.Vector3(3136.06, 1216.30, -3690.14),
  new THREE.Vector3(3258.81, -295.50, 3771.13),
  new THREE.Vector3(4258.81, 998.90, -3751.13)
];

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( '../img/atina.jpg' );
panorama.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[2], 0 );  
} );

panorama2 = new PANOLENS.ImagePanorama( '../img/london.jpg' );
panorama2.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[2], 0 );
} );


panorama3 = new PANOLENS.ImagePanorama( '../img/newyork.jpg' );
panorama3.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[2], 0 );
} );


panorama4 = new PANOLENS.ImagePanorama( '../img/istanbul1.jpg' );
panorama4.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[2], 0 );
} );
  //sayfaları birbirine bağlayan
panorama.link( panorama2, infospotPositions[0] );
panorama2.link( panorama3, infospotPositions[1] );
panorama3.link( panorama4, infospotPositions[0] );
panorama4.link( panorama, infospotPositions[1] );

panorama.link( panorama3, infospotPositions[2] );

infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot.position.set( 0, 0, -5000 );
infospot.addHoverText('Atina!', 40);

infospot2 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot2.position.set( 0, 0, -5000 );
infospot2.addHoverText('Londra!', 40);


infospot3 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot3.position.set( 0, 0, -5000 );
infospot3.addHoverText('New York!', 40);


infospot4 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot4.position.set( 0, 0, -5000 );
infospot4.addHoverText('İstanbul!', 40);


panorama.add( infospot );
panorama2.add( infospot2 );
panorama3.add( infospot3 );
panorama4.add( infospot4 );

viewer = new PANOLENS.Viewer( { output: 'console', container: container } );
viewer.add( panorama, panorama2 , panorama3, panorama4);

