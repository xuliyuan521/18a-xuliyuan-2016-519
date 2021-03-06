class settags {
  constructor () {
    this.param = '/';
  }

  async update (c) {
    let uid = (c.box.user.role === 'root' || c.box.user.role === 'super') 
              ? null : c.box.user.id;
    try {
      c.body = JSON.parse(c.body);
      let r = await c.service.docs.setTags(c.body.idlist, c.body.tag, uid);
      if (!r) {
        c.res.body = c.service.api.ret('EBADATA', '更新失败，请检查数据是否正确。');
        return ;
      }
      c.res.body = c.service.api.ret(0);
    } catch (err) {
      c.res.body = c.service.api.ret('EBADDATA');
      return ;
    }
  }

}

module.exports = settags;
