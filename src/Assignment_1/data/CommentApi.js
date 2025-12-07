import CommentData from './CommentData';

// new code
export default class CommentApi {
    static getAllComments() {
        return CommentData.comments;
    }
}