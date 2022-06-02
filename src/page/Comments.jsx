import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CommentList } from "../components/CommentComponents/CommentList";
import Post from "../components/Post";
import { loadPosts } from "../store/actions/posts";
import { loadComments } from "../store/actions/comments";
import Loader from "../components/Loader/Loader";
import ModalComment from "../components/CommentComponents/ModalComment";
import "./PageStyle.scss";

const Comments = () => {
  const strongText = useSelector((state) => state.strongText.strongText);

  const param = useParams();
  const userId = parseInt(param.userId, 10);
  const postId = parseInt(param.postId, 10);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(loadComments(postId));
  }, [dispatch, postId]);

  const post = useSelector((state) =>
    state.posts.allPosts.find((p) => p.id === postId)
  );

  const comments = useSelector((state) => state.comments.allComments);

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Loader
  if (comments.length === 0) {
    return <Loader />;
  }

  return (
    <div className="mt-5">
      {!strongText ? (
        <Container className="py-4">
          <Row className="mt-4 mb-2">
            <Col>
              <h4>Пост</h4>
            </Col>
          </Row>
          <Row className=" mb-2">
            <Col>
              <Post post={post} userId={userId} className="text-not-hover" />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <h4>Комментарии</h4>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <CommentList comments={comments} />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="justify-content-center">
              <Button variant="dark" className="rounded-0" onClick={handleShow}>
                Добавить комментарий
              </Button>
            </Col>
          </Row>
          {/* Modal */}
          <ModalComment
            handleShow={handleShow}
            handleClose={handleClose}
            show={show}
            setShow={setShow}
          />
        </Container>
      ) : (
        // strong version
        <Container className="py-4">
          <Row className="mt-4 mb-2">
            <Col>
              <h4 className="fw-bold">Пост</h4>
            </Col>
          </Row>
          <Row className=" mb-2">
            <Col>
              <Post
                post={post}
                key={post.id}
                userId={userId}
                className="text-not-hover"
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <h4 className="fw-bold">Комментарии</h4>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <CommentList comments={comments} />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="justify-content-center">
              <Button
                variant="dark"
                className="rounded-0 fw-bold"
                onClick={handleShow}
              >
                Добавить комментарий
              </Button>
            </Col>
          </Row>
          {/* Modal */}
          <ModalComment
            handleShow={handleShow}
            handleClose={handleClose}
            show={show}
            setShow={setShow}
          />
        </Container>
      )}
    </div>
  );
};

export default Comments;
