import View from './View';

class TeamView extends View
{
    _parentElement = document.querySelector('.team__user-list');

    _generateMarkup() {
        return this._data.map(member => {
            return `  
             <div class="team__user">
                <img class="team__user-image " src="${member.img}" alt="image team member">
                <h3 class="team__user-name heading-quertenary">${member.name}</h3>
                <h4 class="team__user-role">${member.role}</h4>
              </div>`
        }).join(' ');
    }

}


export default new TeamView();