import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './practicum.css'
import imageOne from '../../../images/snowy_trees.jpg';
import imageTwo from '../../../images/splash.jpg';

//Custom Components
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';

class Practicum extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <main>
                    <section className="row" id="practicum">
                        <div className="col-md-2 col-md-offset-5 col-sm-2 col-sm-offset-5">
                            <h1>Practicum</h1>
                        </div>
                    </section>
                    <div className="row media">
                        <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe src="https://www.youtube.com/embed/08UfJ8HSpfY?ecver=1"  allowfullscreen/>
                            </div>
                        </div>
                    </div>
                    <div className="row practicum-text">
                        <div className="col-md-10 col-md-offset-1">
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue leo et gravida auctor. Curabitur sed rhoncus mauris, ac luctus turpis. Nunc tincidunt dolor vel porta imperdiet. Praesent tristique aliquet tortor, sollicitudin lacinia ipsum lacinia id.
                                Cras sit amet tortor id massa efficitur suscipit. <br/> Vestibulum quis nisl sagittis, pharetra sapien sed, vestibulum nisi.
                                Maecenas scelerisque molestie eleifend. Donec suscipit placerat ultricies. Ut quis arcu nec justo egestas tristique.
                                Nam efficitur consequat nisi sed rutrum.
                                <img src={imageOne} className="img-thumbnail" height="275" width="275" alt="Trees" align="left" />
                                Sed sodales auctor sollicitudin. Nullam hendrerit neque tortor, ac placerat metus sollicitudin in. Suspendisse in augue feugiat, dictum ante a, dignissim magna. Integer ultrices tortor in ligula lobortis lobortis. Cras quis sapien lorem. Donec cursus, libero quis laoreet hendrerit, velit turpis congue nisl, non cursus ante
                                dui vel leo. Mauris imperdiet sollicitudin urna condimentum tincidunt. <br/> Duis metus ipsum, congue nec est in, dignissim pulvinar eros.
                                Vestibulum vestibulum sit amet felis vel fermentum. Donec ultricies egestas enim ut porttitor. Nulla auctor dolor id augue bibendum,
                                eu placerat dolor rhoncus. Nunc eget felis at lectus lobortis laoreet. Fusce fringilla efficitur egestas. Aliquam blandit consectetur
                                tortor, eu lobortis lacus aliquam ut.
                                <img src={imageTwo} className="img-thumbnail" height="275" width="275" alt="Trees" align="right" />
                                Phasellus at felis nisl. Vestibulum ante ipsum primis in faucibus orci <br/>
                                luctus et ultrices posuere cubilia Curae; Vestibulum rhoncus purus in sapien blandit convallis. Nunc auctor faucibus lacus nec venenatis. Aliquam erat volutpat. In ullamcorper, dolor et consequat cursus,
                                ante tellus dapibus enim, eget tempus dolor sem sed metus. Integer volutpat ante id diam ornare pharetra. Nunc vitae ante ac
                                ligula facilisis scelerisque non eu sapien. Curabitur hendrerit non magna vel laoreet. Integer rhoncus neque elementum orci
                                placerat dignissim. Fusce tincidunt sed nunc vitae feugiat.
                                In hac habitasse platea dictumst. Ut posuere ante a volutpat tempor. Praesent lorem elit, consectetur quis sem ac,
                                pellentesque convallis lorem. Cras facilisis tincidunt pretium. Suspendisse non imperdiet elit. Suspendisse scelerisque
                                ac mi at luctus. Mauris eros neque, mollis a iaculis a, dapibus sed ante.

                                Suspendisse mollis, dui a dignissim hendrerit, elit purus faucibus nulla, sit amet viverra lorem dolor quis nisl. Sed metus magna,

                                feugiat malesuada nisi sed, volutpat venenatis urna. In efficitur nisi augue, a dictum enim placerat eget. Maecenas dignissim arcu vitae n
                                isi efficitur commodo. Donec elementum dui eget tellus fermentum, et viverra tellus blandit. Integer et congue est. Curabitur purus nisl,
                                pulvinar ac lorem fermentum, lacinia fringilla lorem. Suspendisse sollicitudin velit tellus, ut malesuada elit porttitor nec. Aenean tristique
                                elementum elit sit amet pellentesque. Vestibulum sagittis sollicitudin tincidunt. Sed porttitor mi enim, id fringilla lacus tempor id. Suspendisse potenti.
                                Duis non erat nibh. Donec maximus ultrices urna, ut interdum tortor elementum sit amet. Donec vestibulum non lacus id varius.
                            </p>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Practicum;