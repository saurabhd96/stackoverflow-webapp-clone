import { getConsumer, getProducer } from '../loaders/kafka';
import {
  getInterestingPosts, createPost, getPostById, addAnswer, addComment, addCommentToAnswer,
  getHotPosts, getTopScorePosts, getTopUnansweredPosts
} from '../services/postService';

getConsumer('posts', (consumer) => {
  var producer = getProducer()

  consumer.on('message', function (message) {
    var data = JSON.parse(message.value)
    const { payload, correlationId } = data
    const { action } = payload

    console.log('Consuming data from topic ...', action)

    if (action == 'ADD_POST') {
      createPost(payload, (err, res) => {
        var payload = {}
        if (err) {
          console.log('Adding a tag failed:', err)
          payload = {
            status: 400,
            content: err,
            correlationId: correlationId
          }
        }
        if (res) {
          payload = {
            status: 200,
            content: res,
            correlationId: correlationId
          }
        }
        console.log(payload)
        //Send Response to acknowledge topic
        let payloads = [
          { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
        ]
        producer.send(payloads, (err, data) => {
          if (err) throw err
          console.log('ACK message sent:', data)
        })
      })
    }

    if (action == 'GET_INTERESTING') {
      getInterestingPosts((err, res) => {
        var payload = {};
        if (err) {
          console.log('Get all posts failed:', err)
          payload = {
            status: 400,
            content: err,
            correlationId: correlationId
          }
        }
        if (res) {
          payload = {
            status: 200,
            content: res,
            correlationId: correlationId
          }
        }
        //Send Response to acknowledge topic
        let payloads = [
          { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
        ]
        producer.send(payloads, (err, data) => {
          if (err) throw err
          console.log('ACK message sent:', data)
        })
      })
    }

    if (action == 'GET_HOT_POSTS') {
      getHotPosts((err, res) => {
        var payload = {};
        if (err) {
          console.log('Get all posts failed:', err)
          payload = {
            status: 400,
            content: err,
            correlationId: correlationId
          }
        }
        if (res) {
          payload = {
            status: 200,
            content: res,
            correlationId: correlationId
          }
        }
        //Send Response to acknowledge topic
        let payloads = [
          { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
        ]
        producer.send(payloads, (err, data) => {
          if (err) throw err
          console.log('ACK message sent:', data)
        })
      })
    }

    if (action == 'GET_TOP_SCORE') {
      getTopScorePosts((err, res) => {
        var payload = {};
        if (err) {
          console.log('Get all posts failed:', err)
          payload = {
            status: 400,
            content: err,
            correlationId: correlationId
          }
        }
        if (res) {
          payload = {
            status: 200,
            content: res,
            correlationId: correlationId
          }
        }
        //Send Response to acknowledge topic
        let payloads = [
          { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
        ]
        producer.send(payloads, (err, data) => {
          if (err) throw err
          console.log('ACK message sent:', data)
        })
      })
    }

    if (action == 'GET_TOP_UNANSWERED') {
      getTopUnansweredPosts((err, res) => {
        var payload = {};
        if (err) {
          console.log('Get all posts failed:', err)
          payload = {
            status: 400,
            content: err,
            correlationId: correlationId
          }
        }
        if (res) {
          payload = {
            status: 200,
            content: res,
            correlationId: correlationId
          }
        }
        //Send Response to acknowledge topic
        let payloads = [
          { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
        ]
        producer.send(payloads, (err, data) => {
          if (err) throw err
          console.log('ACK message sent:', data)
        })
      })
    }

    if (action == 'GET_SINGLE_POST') {
      getPostById(payload, (err, res) => {
        var payload = {};
        if (err) {
          console.log('Get single posts failed:', err)
          payload = {
            status: 400,
            content: err,
            correlationId: correlationId
          }
        }
        if (res) {
          payload = {
            status: 200,
            content: res,
            correlationId: correlationId
          }
        }
        //Send Response to acknowledge topic
        let payloads = [
          { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
        ]
        producer.send(payloads, (err, data) => {
          if (err) throw err
          console.log('ACK message sent:', data)
        })
      })
    }

    if (action == 'ADD_ANSWER') {
      addAnswer(payload, (err, res) => {
        var payload = {}
        if (err) {
          console.log('Adding an answer failed:', err)
          payload = {
            status: 400,
            content: err,
            correlationId: correlationId
          }
        }
        if (res) {
          payload = {
            status: 200,
            content: res,
            correlationId: correlationId
          }
        }
        console.log(payload)
        //Send Response to acknowledge topic
        let payloads = [
          { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
        ]
        producer.send(payloads, (err, data) => {
          if (err) throw err
          console.log('ACK message sent:', data)
        })
      })
    }

    if (action == 'ADD_COMMENT') {
      addComment(payload, (err, res) => {
        var payload = {}
        if (err) {
          console.log('Adding a comment failed:', err)
          payload = {
            status: 400,
            content: err,
            correlationId: correlationId
          }
        }
        if (res) {
          payload = {
            status: 200,
            content: res,
            correlationId: correlationId
          }
        }
        console.log(payload)
        //Send Response to acknowledge topic
        let payloads = [
          { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
        ]
        producer.send(payloads, (err, data) => {
          if (err) throw err
          console.log('ACK message sent:', data)
        })
      })
    }

    if (action == 'ADD_COMMENT_ANSWER') {
      addCommentToAnswer(payload, (err, res) => {
        var payload = {}
        if (err) {
          console.log('Adding a comment failed:', err)
          payload = {
            status: 400,
            content: err,
            correlationId: correlationId
          }
        }
        if (res) {
          payload = {
            status: 200,
            content: res,
            correlationId: correlationId
          }
        }
        console.log(payload)
        //Send Response to acknowledge topic
        let payloads = [
          { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
        ]
        producer.send(payloads, (err, data) => {
          if (err) throw err
          console.log('ACK message sent:', data)
        })
      })
    }
  })
})