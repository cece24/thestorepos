let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require('../index')

chai.use(chaiHttp)

describe('Users', () => {
  describe('/GET users', () => {
    it('should GET all the users', (done) => {
      chai.request(app)
        .get('/users')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })

    it('should get a single user', (done) => {
      const id = 1
      chai.request(app)
        .get(`/users/${id}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })
  })
})