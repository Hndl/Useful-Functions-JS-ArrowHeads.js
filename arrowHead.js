function drawArrow (_tipX, _tipY, _tailX, _tailY, _rad = 20, _sz = 10, _col = 255){
      
    let dx = _tipX - _tailX;
    let dy = _tipY - _tailY;

    let theta = Math.atan2(dy, dx);

    let rad = radians(_rad); 
    let x = _tipX - _sz * Math.cos(theta + rad);
    let y = _tipY - _sz * Math.sin(theta + rad);

    let phi2 = radians(-_rad);
    let x2 = _tipX - _sz * Math.cos(theta + phi2);
    let y2 = _tipY - _sz * Math.sin(theta + phi2);

    stroke(_col);
    line(_tipX,_tipY,_tailX,_tailY);
    triangle(_tipX,_tipY,x,y,x2,y2);
    
    return ({
      'x':_tipX,
      'y':_tipY,
      'x1':x,
      'y1':y,
      'x2':x2,
      'y2':y2
    });

}
