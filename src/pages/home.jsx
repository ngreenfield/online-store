import './home.css'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div className='home bg page'>
            <h1>Nature's Pantry</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fuga, voluptatem quae cupiditate rerum quibusdam culpa incidunt beatae minus sequi eligendi eaque ullam, nam maiores suscipit tempora. Impedit omnis error aperiam voluptate aliquid nobis eum assumenda eligendi alias eos accusantium natus dignissimos, suscipit, soluta molestiae modi voluptatibus ducimus quidem rem. Qui sequi magnam iste, quisquam, asperiores saepe deleniti molestiae, beatae laboriosam accusamus ipsam suscipit explicabo itaque hic dolor consequuntur fugiat optio numquam repudiandae dolorum! Ullam nostrum facilis iure laboriosam recusandae maiores libero asperiores sed error ipsa quis, qui nemo, pariatur, ut molestias adipisci dolore placeat. Nesciunt illo sunt molestias officiis omnis fuga voluptas amet perspiciatis assumenda quia ea, accusantium voluptatibus nam consectetur. Molestiae repellat vero inventore repudiandae voluptates provident natus amet, culpa nostrum asperiores facere illum, nihil tempore alias fugit sed ipsam voluptatum dignissimos quidem aliquam. Vel nemo illo maxime, modi odio saepe possimus, quo iusto, dolorum voluptatibus esse assumenda.</p>
            </div>

            <div className='catalog-btn'>
                <Link className='btn btn-lg btn-success px-3' to="/catalog">Check out our catalog <i class="fa-solid fa-circle-chevron-right"></i></Link>
            </div>
        </div>
    )
}

export default Home;