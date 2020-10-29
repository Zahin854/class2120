function isTouching(target,sprite){ 
    if(sprite.x-target.x<sprite.width/2+target.width/2&&
      target.x-sprite.x<sprite.width/2+target.width/2&&
      sprite.y-target.y<sprite.height/2+target.height/2&&
      target.y-sprite.y<sprite.height/2+target.height/2){
        return true;
        
      }
      else {
  return false}
    
  }