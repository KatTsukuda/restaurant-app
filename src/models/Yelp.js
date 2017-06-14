import $ from 'jquery-ajax';

class YelpModel {
  static get() {
    let request = $.ajax({
          method: 'GET',
          url: "/wood-tavern-oakland",
          beforeSend: function(xhr) {
                  xhr.setRequestHeader("Authorization", "Bearer UKWxH_2pKgsmhYvw3sfPK08BPbQFVB2ZkM4umAhZ47NAS7Z-YNdBY-ggeF8mv4JdrWcwNuk7aAErQEwLZkiHehETJTHRMoawVexgx4DU-SSZWboxyaUxBRciTM0wWXYx");
          }

        })
        return request
  }
}

export default YelpModel;
