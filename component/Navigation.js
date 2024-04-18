class Navigation extends React.Component {

  render() {
    return (
        <ul className="navbar-nav mb-lg-7">
            <li className="nav-item">
                <a className="nav-link " href="tweet-template.html">
                    <span>ツイートテンプレート</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="text-encryption.html">
                    <span>テキスト暗号化</span>
                </a>
            </li>
        </ul>
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
const domContainer = document.getElementById('navigation');
const root = ReactDOM.createRoot(domContainer);
root.render(<Navigation />);