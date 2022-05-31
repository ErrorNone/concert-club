import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <Card className="mb-3 rounded-0 border-dark">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/comments" className="text-hover">
            <Card.Title>
              <h5>Twenty One Pilots</h5>
            </Card.Title>
          </Link>
          <Card.Title>
            <h6>12.01.22</h6>
          </Card.Title>
        </div>
        <Card.Text>
          Просто шикарный альбом, Пилоты после Blurryface решили не идти
          проторенной дорожкой, и сделали что то новое. На мой взгляд у них на
          100% получилось, альбом слушается на одном дыхании, каждая песня чем
          то запоминается, естественно нужно понимать тексты, чтобы вникнуть до
          конца во весь сюжет и атмосферу альбома....
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
