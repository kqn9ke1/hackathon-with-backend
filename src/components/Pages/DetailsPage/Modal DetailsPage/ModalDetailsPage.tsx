import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Указываем корневой элемент вашего приложения

function ModalWindow() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div>
        <div className="mainDiv">
          <div className="pictureDiv">
            <img
              src="data:image/jpeg;base64,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"
              alt="google"
            />
          </div>
          <div className="functionalDiv">
            <div className="headerDiv">
              <header className="profileHeader">
                <div className="headerContent">
                  <div className="circleDiv">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </div>

                  <span className="nicknameSpan">Nickname</span>
                  <span className="separateSpan">•</span>
                  <span className="subscribeSpan">Подписаться</span>
                </div>
              </header>
              <div className="buttonDiv">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADY2Njs7Ox+fn46OjpPT0/c3Nzg4OCXl5eHh4f09PTp6enHx8efn5+RkZHBwcGlpaVkZGQgICCxsbEaGhoTExM/Pz/Pz8+3t7d3d3cqKipcXFxpaWlGRkYwMDBjc1dTAAAC90lEQVR4nO3ba3OqMBCAYSJqEbzgXbG1//9fVvB0xALJZu3MmSbv8z0721w3mCYJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/pA0O89Web6a7Ubpb8Us5ovlLWa+Wi7mxW8FTUe7e6LnzCPRUz41LceqfD2hbL3ZtmJuN+vs5ZhFWR3biU7zk6jZ7GI69tVr+ZTTbkwzLV+KmVX7bszLzDUY6bgnlcb7SJ3LrieVe8ft1DFH70OJjq2zdT3UrGmqm6uniSXmRDSvOorBgaitB9tlV1s7Yw6aaZXbY5pcEbM82GNeB9bU2ZGLJp306Ix59N6sXZ12c+5rN3O3u61Gv1zeJDHNm1/QwRXYNlN1TG3qk8tJFtN4Lca+bblHZ7qthMn4jKJsBGseoygawdrquZ11E332Ic0llcc04rX4IY/5tKVKp1NjKUzGvck8HIUxlz6JtiZ/0VPGWMjOfuHC/ke2S4+8Yl4eB7j1/OyaSJLxmhZGuNvYioceY13PGNk89UxG1G1ec7T2PdscpUwPd/22847prlEL75jXe0Pf+WR6z9MfhortYXtnTFFN8uw+98UnTIsrmVIR01n1KmI2p3emaNhf97UIC48nrnJJUDd3Zbqxd2aj6jXjuGVreq1ZT/77TM1ehHiUSC3D97qaT4n0cNVsUA37otmoYm6sMTVL29TbvrLh2JZMsXUH6LG1HkKeZcm30v8UvbMuxLkuppnbgqqWYV2dVLqGn7b+XuhimoVtXnzqYlZeN4A2W38r54W1GtTOi2Pid614sG3t4uv0DytLTN0BdLtgJI7PVoNs13K/i9OD7Qol/2Dw7KAphRp/5S80EYxh+Osw/L00/PMw/Jom/Lo0/LtF+PfDCO744X+nCf9bWwTfS8P/5h3B7xbh//YUwe+H4f8GHMHv+BG8xYjgPU0Eb6IieNcWwdvEJPz3pUkEb4ST8N95NwJ/q38X+P9bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P/7AsD5N9DOK9sbAAAAAElFTkSuQmCC"
                  alt="3points"
                />
              </div>
            </div>
            <div className="commentDiv"></div>
            <div className="reactionDiv">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/5948/5948565.png"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/786/786205.png"
                alt=""
              />

              <div className="addToFavDiv">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png"
                  alt=""
                />
              </div>
            </div>
            <div className="likeDiv">
              <div className="likeCounterDiv">
                <span>$ отметок 'Нравится'</span>
                {/* <span className="dateSpan">1 Апреля</span> */}
              </div>
            </div>
            <div className="addCommentDiv">
              <div className="smileBoxDiv">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3404/3404134.png"
                  alt=""
                />
              </div>
              <div>
                <form action="">
                  <input type="text" placeholder="Добавьте комментарий..." />
                </form>
              </div>

              <div className="sandDiv">
                <span>Опубликовать</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalWindow;