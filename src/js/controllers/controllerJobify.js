import gigModel from './../models/gigModel';
import gigView from './../views/gigView';


export const initJobify=function(){
    gigView.render(gigModel.gigs);
}



