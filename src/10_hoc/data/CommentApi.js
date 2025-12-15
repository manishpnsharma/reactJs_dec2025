import axios from 'axios';
//import CommentData from './CommentData';
export default class CommentApi {
    static async getAllComments() {
        // return CommentData.comments;
        try {
            const response = await axios.get('http://localhost:3001/comments');
            console.log(response);
            return response.data;
        } catch (error) {
            console.log('Error : ${error.mesage}');
            throw error;
        }
    }
}
/*
// old aproch
export default class CommentApi {
    static getAllComments() {
        return axios.get('http://localhost:3001/comments')
            .then(response => response.data).
            catch(error => console.log('methos faild  : ${error.message}'))
    }
} */
