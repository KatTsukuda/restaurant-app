import $ from 'jquery-ajax';
import SubmitForm from '../components/SubmitForm'

class YelpModel {


  static get(restId) {
    console.log(restId)
    let request = $.ajax({
          method: 'GET',
          url: `/${restId}`,
          beforeSend: function(xhr) {
                  xhr.setRequestHeader("Authorization", "Bearer UKWxH_2pKgsmhYvw3sfPK08BPbQFVB2ZkM4umAhZ47NAS7Z-YNdBY-ggeF8mv4JdrWcwNuk7aAErQEwLZkiHehETJTHRMoawVexgx4DU-SSZWboxyaUxBRciTM0wWXYx");
          }

        })
        return request
        console.log(request)
  }
}

export default YelpModel;
