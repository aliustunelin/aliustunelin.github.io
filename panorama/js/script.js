var panorama, panorama2, panorama3, panorama4, viewer, container, infospot;

var lookAtPositions = [
  //(z,y,x)
  new THREE.Vector3(4871.39, 1088.07, -118.41),
  new THREE.Vector3(1278.27, 732.65, 4769.19),
  new THREE.Vector3(0, 50 , 0),
];

var infospotPositions = [
  //(z,y,x)
  //kent->kammpus
  new THREE.Vector3(-2436.06, 1216.30, 3690.14),
  //kampus->istanbul
  new THREE.Vector3(3258.81, 395.50, 71.13),
  //kent->sakarya
  new THREE.Vector3(3258.81, 1719.90, 3751.13),
  //kampus->kent
  new THREE.Vector3(-3558.81, -125.50, 121.13)
  
];
   
container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( '../panorama/img/kentMeydani.jpg' );
panorama.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );

panorama2 = new PANOLENS.ImagePanorama( '../panorama/img/kampus.jpg' );
panorama2.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[1], 0 );
} );


panorama3 = new PANOLENS.ImagePanorama( '../panorama/img/sakarya.jpg' );
panorama3.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[1], 0 );
} );


panorama4 = new PANOLENS.ImagePanorama( '../panorama/img/istanbul1.jpg' );
panorama4.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );

panorama.link( panorama2, infospotPositions[0] );
panorama2.link( panorama4, infospotPositions[1] );
panorama3.link( panorama4, infospotPositions[0] );
panorama4.link( panorama, infospotPositions[1] );
panorama.link( panorama3, infospotPositions[2] );
panorama2.link( panorama, infospotPositions[3] );

infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot.position.set( 5000, 2190, 0 );
                      //(z,y,x)
infospot.addHoverText('Kent MEYDANI', 40);

infospot2 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot2.position.set( 0, 0, -5000 );
infospot2.addHoverText('Kampüs KAPI', 40);


infospot3 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot3.position.set( 0, 0, -5000 );
infospot3.addHoverText('YENİ BELEDİYE', 40);


infospot4 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot4.position.set( 0, 0, -5000 );
infospot4.addHoverText('EMİNÖNÜ', 40);


panorama.add( infospot );
panorama2.add( infospot2 );
panorama3.add( infospot3 );
panorama4.add( infospot4 );

viewer = new PANOLENS.Viewer( { output: 'console', container: container } );
viewer.add( panorama, panorama2 , panorama3, panorama4);

