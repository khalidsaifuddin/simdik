import React, {Component} from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
} from 'framework7-react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

class SPMLuarWilayah extends Component {
    state = {
        error: null,
        routeParams:{
            foo:'bar'
        },
        spm_luar_wilayah: {
            rows: [],
            total: 0
        },
        spm_usia_sekolah_total: {
            total56: 0,
            total712: 0,
            total1315: 0,
            total1618: 0,
            total18: 0,
            totaltotal: 0
        }
    }


    formatAngka = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    componentDidMount = () => {
        
        for (var property in this.props.tabBar) {
            // console.log(this.state.tabBar[property]);
            this.props.tabBar[property] = false;
        }
        
        this.props.tabBar.kategori = true;
        
        this.props.setTabActive(this.props.tabBar);
        console.log(this.props.tabBar);

        this.props.getSPMLuarWilayah(this.state.routeParams).then((result)=>{
            this.setState({
                spm_luar_wilayah: this.props.spm_luar_wilayah
            },()=>{
                
            });
        });
    }

    render()
    {
        return (
            <Page name="SPMLuarWilayah" hideBarsOnScroll>
                <Navbar sliding={false} large backLink="Kembali">
                    <NavTitle sliding>Peserta Didik (Form 1.3 B)</NavTitle>
                    <NavTitleLarge style={{background:'#F6BC31', color:'white'}}>Peserta Didik (Form 1.3 B)</NavTitleLarge>
                </Navbar>
                <Block strong style={{
                    marginTop:'0px', 
                    paddingLeft:'0px', 
                    paddingRight:'0px', 
                    paddingTop:'0px', 
                    paddingBottom:'0px'
                }}>
                    <div className="data-table" style={{overflowY:'hidden'}}>
                        <table>
                            <thead style={{background:'#eeeeee'}}>
                                <tr>
                                    <th className="label-cell" rowSpan="4" style={{minWidth:'40px'}}>&nbsp;</th>
                                    <th className="label-cell" rowSpan="4" style={{minWidth:'120px', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}}>Jenjang</th>
                                    <th className="label-cell" rowSpan="4" style={{minWidth:'120px', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}}>Status</th>
                                    <th className="label-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} colSpan="7">Peserta Didik Luar Wilayah</th>
                                    <th className="label-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} colSpan="7">Peserta Didik Dalam Wilayah</th>
                                </tr>
                                <tr>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} colSpan="3">Tidak Ada NIK</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} colSpan="3">Ada NIK</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} rowSpan="3">Total Luar Wilayah</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} colSpan="3">Tidak Ada NIK</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} colSpan="3">Ada NIK</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} rowSpan="3">Total Dalam Wilayah</th>
                                </tr>
                                <tr>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} colSpan="2">Miskin</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} rowSpan="2">Tidak Miskin</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} colSpan="2">Miskin</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} rowSpan="2">Tidak Miskin</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} colSpan="2">Miskin</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} rowSpan="2">Tidak Miskin</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} colSpan="2">Miskin</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}} rowSpan="2">Tidak Miskin</th>
                                </tr>
                                <tr>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}}>Dapat Bantuan</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}}>Belum Dapat</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}}>Dapat Bantuan</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}}>Belum Dapat</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}}>Dapat Bantuan</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}}>Belum Dapat</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}}>Dapat Bantuan</th>
                                    <th className="numeric-cell" style={{textAlign:'center', color:'#434343', fontSize:'15px', border:'1px solid #ccc'}}>Belum Dapat</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.loading ?
                            <>
                                {this.props.dummy_rows.rows.map((option)=>{
                                    return (
                                        <tr>
                                            <td className="label-cell skeleton-text skeleton-effect-blink">
                                                loremipsum
                                            </td>
                                            <td className="label-cell skeleton-text skeleton-effect-blink">lorenipsumlorenipsum</td>
                                            <td className="numeric-cell skeleton-text skeleton-effect-blink">lorenipsum</td>
                                            <td className="numeric-cell skeleton-text skeleton-effect-blink">lorenipsum</td>
                                            <td className="numeric-cell skeleton-text skeleton-effect-blink">lorenipsum</td>
                                            <td className="numeric-cell skeleton-text skeleton-effect-blink">lorenipsum</td>
                                            <td className="numeric-cell skeleton-text skeleton-effect-blink">lorenipsum</td>
                                            <td className="numeric-cell skeleton-text skeleton-effect-blink">lorenipsum</td>
                                            <td className="numeric-cell skeleton-text skeleton-effect-blink">lorenipsum</td>
                                        </tr>
                                    )
                                })}
                            </>
                            :
                            <>
                            {this.state.spm_luar_wilayah.rows.map((option)=>{

                                return (
                                    <tr key={option.kode_wilayah}>
                                        <td className="label-cell">
                                            &nbsp;
                                        </td>
                                        {option.status_sekolah === 'Negeri' &&
                                        <td className="label-cell" rowSpan="2">
                                            {option.nama}
                                        </td>
                                        }
                                        {/* {option.status_sekolah === 'Swasta' &&
                                        <td className="label-cell">
                                            {option.nama}
                                        </td>
                                        } */}
                                        <td className="label-cell">
                                            {option.status_sekolah}
                                        </td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.luar_wilayah_non_nik_miskin_dapat_bantuan))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.luar_wilayah_non_nik_miskin_belum_dapat_bantuan))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.luar_wilayah_non_nik_tidak_miskin))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.luar_wilayah_nik_miskin_dapat_bantuan))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.luar_wilayah_nik_miskin_belum_dapat_bantuan))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.luar_wilayah_nik_tidak_miskin))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.total_luar_wilayah))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.dalam_wilayah_non_nik_miskin_dapat_bantuan))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.dalam_wilayah_non_nik_miskin_belum_dapat_bantuan))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.dalam_wilayah_non_nik_tidak_miskin))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.dalam_wilayah_nik_miskin_dapat_bantuan))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.dalam_wilayah_nik_miskin_belum_dapat_bantuan))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.dalam_wilayah_nik_tidak_miskin))}</td>
                                        <td className="numeric-cell">{this.formatAngka(parseInt(option.total_dalam_wilayah))}</td>
                                    </tr>
                                )
                            })}
                            </>
                            }
                            </tbody>
                        </table>
                        <div className="data-table-footer" style={{display:'block', height:'75px'}}>
                            <div className="data-table-pagination">
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </Block>
            </Page>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      updateWindowDimension: Actions.updateWindowDimension,
      setLoading: Actions.setLoading,
      setTabActive: Actions.setTabActive,
      getSPMLuarWilayah: Actions.getSPMLuarWilayah
    }, dispatch);
}

function mapStateToProps({ App, Spm }) {
    return {
        window_dimension: App.window_dimension,
        loading: App.loading,
        tabBar: App.tabBar,
        spm_luar_wilayah: Spm.spm_luar_wilayah
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(SPMLuarWilayah));
