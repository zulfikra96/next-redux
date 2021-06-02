import '../styles/globals.css'
import App from 'next/app'
import { Provider } from 'react-redux';
import  { wrapper } from '../redux/store';
import withRedux from "next-redux-wrapper";

class MyApp extends App{

  static async getInitialProps({Component, ctx}){
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx):{};
    return { pageProps:pageProps }
  }

  render(){
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default wrapper.withRedux(MyApp)
