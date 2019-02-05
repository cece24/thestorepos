let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require('../index')

chai.use(chaiHttp)

describe('Orders', () => {
  describe('/GET orders', () => {
    it('should GET all the orders', (done) => {
      chai.request(app)
        .get('/orders')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })

    it('should get a single order', (done) => {
      const id = 1
      chai.request(app)
        .get(`/orders/${id}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })
  })

  describe('/POST orders', () => {
    it('should POST an order', (done) => {
      let order = {
        user_id: 1,
        total: 24,
        payment_method_id: 1
      }
      chai.request(app)
        .post('/orders')
        .send(order)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.have.property('message').eql('Successfully created order.')
          res.body.data.should.have.property('id')
          done()
        })
    })
  })

  describe('/PUT/:id order', () => {
    it('should UPDATE an order given the id', (done) => {
      const id = 1
      let order = {
        total: 60,
        payment_method_id: 4,
        points_earned: 60
      }
      chai.request(app)
        .put(`/orders/${id}`)
        .send(order)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('message').eql(`Successfully updated order with ID: ${id}.`)
          done()
        })
    })
  })

})
