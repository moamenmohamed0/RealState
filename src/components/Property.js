import Axios from "axios";
import { useEffect, useState } from "react";



const Block = {display: "block"};
const W_100 = {width: 100};
const Property = ({task,deleteTask,onToggle}) => {
    const [Data,setData] = useState('');
    const fetchExcuse = () => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/`).then(
        (res) => {
            setData(res.data[0]);
        }
        );
    };
    useEffect(()=>{
    fetchExcuse();
    console.log(Data);
    },[])




    return (
        <div className="App">
            <div className="inspiry_show_on_doc_ready rh_prop_search rh_prop_search_init" style={Block}>
                                
                                    <form className="rh_prop_search__form rh_prop_search_form_header advance-search-form" action="https://modern.realhomes.io/properties-search/" method="get">
                                
                                        <div className="rh_prop_search__fields">
                                
                                            <div className="rh_prop_search__wrap rh_prop_search_data" id="rh_fields_search__wrapper" data-top-bar="3">
                                                <div className="rh_form_fat_top_fields rh_search_top_field_common">
                                                    <div className="inspiry_select_picker_field rh_prop_search__option rh_location_prop_search_0 rh_prop_search__select" data-get-location-placeholder="Any">
                                                        <label htmlFor="location">
                                                            Location
                                                        </label>

                                                        <span className="rh_prop_search__selectwrap">
                                                            <div className="dropdown bootstrap-select show-tick inspiry_multi_select_picker_location inspiry_select_picker_trigger bs3" style={W_100}>
                                                                <select id="location" className="inspiry_multi_select_picker_location inspiry_select_picker_trigger show-tick" data-size="5" data-live-search="true" data-none-results-text="No results matched{0}" data-none-selected-text="Any" name="location[]" data-selected-text-format="count > 2" multiple="multiple" data-actions-box="true" title="All Locations" data-count-selected-text="{0}  Locations Selected " tabIndex="-98">
                                                                    <option value="miami">Miami</option>
                                                                    <option value="doral">- Doral</option>
                                                                    <option value="little-havana">- Little Havana</option>
                                                                    <option value="perrine">- Perrine</option>
                                                                </select>
                                                                <div className="dropdown-menu open" style={{overflow:"hidden"}}>
                                                                    <div className="bs-searchbox">
                                                                        <input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-1" aria-autocomplete="list"/>
                                                                    </div>
                                                                    <div className="bs-actionsbox">
                                                                        <div className="btn-group btn-group-sm btn-block">
                                                                            <button type="button" className="actions-btn bs-select-all btn btn-default">
                                                                                <span className="inspiry_select_bs_buttons inspiry_bs_select">
                                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                                                                        <polygon points="22.1 9 20.4 7.3 14.1 13.9 15.8 15.6 "></polygon>
                                                                                        <polygon points="27.3 7.3 16 19.3 9.6 12.8 7.9 14.5 16 22.7 29 9 "></polygon>
                                                                                        <polygon points="1 14.5 9.2 22.7 10.9 21 2.7 12.8 "></polygon>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <button type="button" className="actions-btn bs-deselect-all btn btn-default">
                                                                                <span className="inspiry_select_bs_buttons inspiry_bs_deselect">
                                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                                                                        <path className="inspiry_des rh-st0" d="M3.4 10.5H20c3.8 0 7 3.1 7 7v0c0 3.8-3.1 7-7 7h-6"></path>
                                                                                        <polyline className="inspiry_des rh-st0" points="8.4 15.5 3.4 10.5 8.4 5.5 "></polyline>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="inner open" role="listbox" id="bs-select-1" tabIndex="-1" aria-multiselectable="true" style={{overflow:"auto"}}>
                                                                        <ul className="dropdown-menu inner " role="presentation" style={{marginTop:'0px',marginBottom:'0px'}}>
                                                                            <li>
                                                                                <a role="option" id="bs-select-1-0" tabIndex="0" aria-selected="false" aria-setsize="4" aria-posinset="1">
                                                                                    <span className="fas fa-check check-mark"></span>
                                                                                    <span className="text">Miami</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a role="option" id="bs-select-1-1" tabIndex="0" aria-selected="false">
                                                                                    <span className="fas fa-check check-mark"></span>
                                                                                    <span className="text">- Doral</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a role="option" id="bs-select-1-2" tabIndex="0" aria-selected="false" aria-setsize="4" aria-posinset="3">
                                                                                    <span className="fas fa-check check-mark"></span>
                                                                                    <span className="text">- Little Havana</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a role="option" id="bs-select-1-3" tabIndex="0" aria-selected="false">
                                                                                    <span className="fas fa-check check-mark"></span>
                                                                                    <span className="text">- Perrine</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                
                                                    </div>
                                                    <div className="rh_prop_search__option rh_prop_search__select rh_status_field_wrapper inspiry_select_picker_field">
                                                        <label htmlFor="select-status">
                                                            Property Status
                                                        </label>
                                                        <span className="rh_prop_search__selectwrap">
                                                        <div className="dropdown bootstrap-select show-tick inspiry_select_picker_trigger inspiry_select_picker_status bs3" style={W_100}>
                                                            <select name="status" id="select-status" className="inspiry_select_picker_trigger inspiry_select_picker_status show-tick" data-size="5" tabIndex="-98">
                                                                <option value="any" selected="selected">Any</option>
                                                                <option value="for-rent">For Rent</option>
                                                                <option value="for-sale">For Sale</option>		
                                                            </select>
                                                            
                                                        <div className="dropdown-menu open" style={{overflow:"hidden"}}>
                                                            <div className="inner open" role="listbox" id="bs-select-2" tabIndex="-1" aria-activedescendant="bs-select-2-0" style={{overflow:"auto"}}>
                                                                <ul className="dropdown-menu inner " role="presentation" style={{marginTop:'0px',marginBottom:'0px'}}>
                                                                    <li className="selected active">
                                                                        <a role="option" id="bs-select-2-0" tabIndex="0" aria-setsize="3" aria-posinset="1" className="active selected" aria-selected="true">
                                                                            <span className="fas fa-check check-mark"></span>
                                                                            <span className="text">Any</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <button>
                                                                            <span className="fas fa-check check-mark"></span>
                                                                            <span className="text">For Rent</span>
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <a role="option" id="bs-select-2-2" tabIndex="0">
                                                                            <span className="fas fa-check check-mark"></span>
                                                                            <span className="text">For Sale</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                        </span>
                                                    </div>
                                                    <div className="rh_prop_search__option rh_prop_search__select rh_type_field_wrapper inspiry_select_picker_field">
                                                    <label htmlFor="select-property-type">
                                                        Property Type 
                                                    </label>
                                                    <span className="rh_prop_search__selectwrap">
                                                        <div className="dropdown bootstrap-select show-tick inspiry_select_picker_trigger bs3" style={W_100}>
                                                            <select name="type[]" id="select-property-type" className="inspiry_select_picker_trigger show-tick" data-selected-text-format="count > 2" data-actions-box="true" data-size="5" data-live-search="true" multiple="" title="All Types" data-count-selected-text="{0}  Types Selected " tabIndex="-98">
                                                                <option value="commercial">Commercial</option>
                                                                <option value="office">- Office</option>
                                                                <option value="shop">- Shop</option>
                                                                <option value="residential">Residential</option>
                                                                <option value="apartment">- Apartment</option>
                                                                <option value="apartment-building">- Apartment Building</option>
                                                                <option value="condominium">- Condominium</option>
                                                                <option value="single-family">- Single Family</option>
                                                                <option value="villa">- Villa</option>
                                                            </select>
                                                            
                                                            <div className="dropdown-menu open">
                                                                <div className="bs-searchbox">
                                                                    <input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-3" aria-autocomplete="list"/>
                                                                </div>
                                                            <div className="bs-actionsbox">
                                                                <div className="btn-group btn-group-sm btn-block">
                                                                    <button type="button" className="actions-btn bs-select-all btn btn-default">
                                                                        <span className="inspiry_select_bs_buttons inspiry_bs_select">
                                                                            <svg xmlnsDefault="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                                                                <polygon points="22.1 9 20.4 7.3 14.1 13.9 15.8 15.6 "></polygon>
                                                                                <polygon points="27.3 7.3 16 19.3 9.6 12.8 7.9 14.5 16 22.7 29 9 "></polygon>
                                                                                <polygon points="1 14.5 9.2 22.7 10.9 21 2.7 12.8 "></polygon>
                                                                            </svg>
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" className="actions-btn bs-deselect-all btn btn-default">
                                                                        <span className="inspiry_select_bs_buttons inspiry_bs_deselect">
                                                                            <svg xmlnsDefault="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                                                                <path className="inspiry_des rh-st0" d="M3.4 10.5H20c3.8 0 7 3.1 7 7v0c0 3.8-3.1 7-7 7h-6"></path>
                                                                                <polyline className="inspiry_des rh-st0" points="8.4 15.5 3.4 10.5 8.4 5.5 "></polyline>
                                                                            </svg>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="inner open" role="listbox" id="bs-select-3" tabIndex="-1" aria-multiselectable="true">
                                                                <ul className="dropdown-menu inner " role="presentation" style={{marginTop:'0px',marginBottom:'0px'}}><li><a role="option" id="bs-select-3-0" tabIndex="0" aria-selected="false" aria-setsize="9" aria-posinset="1"><span className="fas fa-check check-mark"></span><span className="text">Commercial</span></a></li><li><a role="option" id="bs-select-3-1" tabIndex="0" aria-selected="false" aria-setsize="9" aria-posinset="2"><span className="fas fa-check check-mark"></span><span className="text">- Office</span></a></li><li><a role="option" id="bs-select-3-2" tabIndex="0" aria-selected="false" aria-setsize="9" aria-posinset="3"><span className="fas fa-check check-mark"></span><span className="text">- Shop</span></a></li><li><a role="option" id="bs-select-3-3" tabIndex="0" aria-selected="false" aria-setsize="9" aria-posinset="4"><span className="fas fa-check check-mark"></span><span className="text">Residential</span></a></li><li><a role="option" id="bs-select-3-4" tabIndex="0" aria-selected="false"><span className="fas fa-check check-mark"></span><span className="text">- Apartment</span></a></li><li><a role="option" id="bs-select-3-5" tabIndex="0" aria-selected="false"><span className="fas fa-check check-mark"></span><span className="text">- Apartment Building</span></a></li><li><a role="option" id="bs-select-3-6" tabIndex="0" aria-selected="false"><span className="fas fa-check check-mark"></span><span className="text">- Condominium</span></a></li><li><a role="option" id="bs-select-3-7" tabIndex="0" aria-selected="false"><span className="fas fa-check check-mark"></span><span className="text">- Single Family</span></a></li><li><a role="option" id="bs-select-3-8" tabIndex="0" aria-selected="false"><span className="fas fa-check check-mark"></span><span className="text">- Villa</span></a></li></ul>
                                                            </div>
                                                            </div>
                                                            </div>
            </span>
                                                            </div>
                                                            </div>
                                
                                                <div className="rh_form_fat_collapsed_fields_wrapper">
                                                    <div className="rh_form_fat_collapsed_fields_container rh_search_fields_prepend_to"><div className="rh_prop_search__option rh_prop_search__select rh_beds_field_wrapper inspiry_select_picker_field">
                                                        <label >
                                                            Min Beds </label>
                                                        <span className="rh_prop_search__selectwrap">
                                                            <div className="dropdown bootstrap-select show-tick inspiry_select_picker_trigger bs3" style={W_100}><select name="bedrooms" id="select-bedrooms" className="inspiry_select_picker_trigger show-tick" data-size="5"  tabIndex="-98">
                                                                <option defaultValue="any" >Any</option>
                                                                <option defaultValue="1">1</option>
                                                                <option defaultValue="2">2</option>
                                                                <option defaultValue="3">3</option>
                                                                <option defaultValue="4">4</option>
                                                                <option defaultValue="5">5</option>
                                                                <option defaultValue="6">6</option>
                                                                <option defaultValue="7">7</option>
                                                                <option defaultValue="8">8</option>
                                                                <option defaultValue="9">9</option>
                                                                <option defaultValue="10">10</option>
                                                            </select><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="combobox" aria-owns="bs-select-4" aria-haspopup="listbox" aria-expanded="false" data-id="select-bedrooms" title="Any"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Any</div></div> </div><span className="bs-caret"><span className="caret"></span></span></button><div className="dropdown-menu open"><div className="inner open" role="listbox" id="bs-select-4"  tabIndex="-1"><ul className="dropdown-menu inner " role="presentation"></ul></div></div></div>
                                                        </span>
                                                    </div><div className="rh_prop_search__option rh_prop_search__select rh_baths_field_wrapper inspiry_select_picker_field">
                                                        <label >
                                                            Min Baths </label>
                                                        <span className="rh_prop_search__selectwrap">
                                                            <div className="dropdown bootstrap-select show-tick inspiry_select_picker_trigger bs3" style={W_100}><select name="bathrooms" id="select-bathrooms" className="inspiry_select_picker_trigger show-tick" data-size="5"  tabIndex="-98">
                                                                <option defaultValue="any" >Any</option>
                                                                <option defaultValue="1">1</option>
                                                                <option defaultValue="2">2</option>
                                                                <option defaultValue="3">3</option>
                                                                <option defaultValue="4">4</option>
                                                                <option defaultValue="5">5</option>
                                                                <option defaultValue="6">6</option>
                                                                <option defaultValue="7">7</option>
                                                                <option defaultValue="8">8</option>
                                                                <option defaultValue="9">9</option>
                                                                <option defaultValue="10">10</option>
                                                            </select><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="combobox" aria-owns="bs-select-5" aria-haspopup="listbox" aria-expanded="false" data-id="select-bathrooms" title="Any"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Any</div></div> </div><span className="bs-caret"><span className="caret"></span></span></button><div className="dropdown-menu open"><div className="inner open" role="listbox" id="bs-select-5"  tabIndex="-1"><ul className="dropdown-menu inner " role="presentation"></ul></div></div></div>
                                                        </span>
                                                    </div><div className="rh_prop_search__option rh_prop_search__select price-for-others inspiry_select_picker_field">
                                                        <label >
                                                            Min Price </label>
                                                        <span className="rh_prop_search__selectwrap">
                                                            <div className="dropdown bootstrap-select show-tick inspiry_select_picker_trigger inspiry_select_picker_price bs3" style={W_100}><select name="min-price" id="select-min-price" className="inspiry_select_picker_trigger inspiry_select_picker_price show-tick" data-size="5"  tabIndex="-98">
                                                                <option defaultValue="any" >Any</option>
                                                                <option defaultValue="1000">$1,000</option>
                                                                <option defaultValue="5000">$5,000</option>
                                                                <option defaultValue="10000">$10,000</option>
                                                                <option defaultValue="50000">$50,000</option>
                                                                <option defaultValue="100000">$100,000</option>
                                                                <option defaultValue="200000">$200,000</option>
                                                                <option defaultValue="300000">$300,000</option>
                                                                <option defaultValue="400000">$400,000</option>
                                                                <option defaultValue="500000">$500,000</option>
                                                                <option defaultValue="600000">$600,000</option>
                                                                <option defaultValue="700000">$700,000</option>
                                                                <option defaultValue="800000">$800,000</option>
                                                                <option defaultValue="900000">$900,000</option>
                                                                <option defaultValue="1000000">$1,000,000</option>
                                                                <option defaultValue="1500000">$1,500,000</option>
                                                                <option defaultValue="2000000">$2,000,000</option>
                                                                <option defaultValue="2500000">$2,500,000</option>
                                                                <option defaultValue="5000000">$5,000,000</option>
                                                            </select><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="combobox" aria-owns="bs-select-6" aria-haspopup="listbox" aria-expanded="false" data-id="select-min-price" title="Any"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Any</div></div> </div><span className="bs-caret"><span className="caret"></span></span></button><div className="dropdown-menu open"><div className="inner open" role="listbox" id="bs-select-6"  tabIndex="-1"><ul className="dropdown-menu inner " role="presentation"></ul></div></div></div>
                                                        </span>
                                                    </div><div className="rh_prop_search__option rh_prop_search__select price-for-others inspiry_select_picker_field">
                                                        <label>
                                                            Max Price </label>
                                                        <span className="rh_prop_search__selectwrap">
                                                            <div className="dropdown bootstrap-select show-tick inspiry_select_picker_trigger inspiry_select_picker_price bs3" style={W_100}><select name="max-price" id="select-max-price" className="inspiry_select_picker_trigger inspiry_select_picker_price show-tick" data-size="5"  tabIndex="-98">
                                                                <option defaultValue="any" >Any</option>
                                                                <option defaultValue="5000">$5,000</option>
                                                                <option defaultValue="10000">$10,000</option>
                                                                <option defaultValue="50000">$50,000</option>
                                                                <option defaultValue="100000">$100,000</option>
                                                                <option defaultValue="200000">$200,000</option>
                                                                <option defaultValue="300000">$300,000</option>
                                                                <option defaultValue="400000">$400,000</option>
                                                                <option defaultValue="500000">$500,000</option>
                                                                <option defaultValue="600000">$600,000</option>
                                                                <option defaultValue="700000">$700,000</option>
                                                                <option defaultValue="800000">$800,000</option>
                                                                <option defaultValue="900000">$900,000</option>
                                                                <option defaultValue="1000000">$1,000,000</option>
                                                                <option defaultValue="1500000">$1,500,000</option>
                                                                <option defaultValue="2000000">$2,000,000</option>
                                                                <option defaultValue="2500000">$2,500,000</option>
                                                                <option defaultValue="5000000">$5,000,000</option>
                                                                <option defaultValue="10000000">$10,000,000</option>
                                                            </select><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="combobox" aria-owns="bs-select-7" aria-haspopup="listbox" aria-expanded="false" data-id="select-max-price" title="Any"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Any</div></div> </div><span className="bs-caret"><span className="caret"></span></span></button><div className="dropdown-menu open"><div className="inner open" role="listbox" id="bs-select-7"  tabIndex="-1"><ul className="dropdown-menu inner " role="presentation"></ul></div></div></div>
                                                        </span>
                                                    </div><div className="rh_prop_search__option rh_prop_search__select price-for-rent hide-fields inspiry_select_picker_field">
                                                        <label >
                                                            Min Price </label>
                                                        <span className="rh_prop_search__selectwrap">
                                                            <div className="dropdown bootstrap-select show-tick inspiry_select_picker_trigger inspiry_select_picker_price bs3" style={W_100}><select name="min-price" id="select-min-price-for-rent" className="inspiry_select_picker_trigger inspiry_select_picker_price show-tick" data-size="5"  tabIndex="-98">
                                                                <option defaultValue="any" >Any</option>
                                                                <option defaultValue="500">$500</option>
                                                                <option defaultValue="1000">$1,000</option>
                                                                <option defaultValue="2000">$2,000</option>
                                                                <option defaultValue="3000">$3,000</option>
                                                                <option defaultValue="4000">$4,000</option>
                                                                <option defaultValue="5000">$5,000</option>
                                                                <option defaultValue="7500">$7,500</option>
                                                                <option defaultValue="10000">$10,000</option>
                                                                <option defaultValue="15000">$15,000</option>
                                                                <option defaultValue="20000">$20,000</option>
                                                                <option defaultValue="25000">$25,000</option>
                                                                <option defaultValue="30000">$30,000</option>
                                                                <option defaultValue="40000">$40,000</option>
                                                                <option defaultValue="50000">$50,000</option>
                                                                <option defaultValue="75000">$75,000</option>
                                                                <option defaultValue="100000">$100,000</option>
                                                            </select><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="combobox" aria-owns="bs-select-8" aria-haspopup="listbox" aria-expanded="false" data-id="select-min-price-for-rent" title="Any"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Any</div></div> </div><span className="bs-caret"><span className="caret"></span></span></button><div className="dropdown-menu open"><div className="inner open" role="listbox" id="bs-select-8"  tabIndex="-1"><ul className="dropdown-menu inner " role="presentation"></ul></div></div></div>
                                                        </span>
                                                    </div><div className="rh_prop_search__option rh_prop_search__select price-for-rent hide-fields inspiry_select_picker_field">
                                                        <label >
                                                            Max Price </label>
                                                        <span className="rh_prop_search__selectwrap">
                                                            <div className="dropdown bootstrap-select show-tick inspiry_select_picker_trigger inspiry_select_picker_price bs3" style={W_100}><select name="max-price" id="select-max-price-for-rent" className="inspiry_select_picker_trigger inspiry_select_picker_price show-tick" data-size="5"  tabIndex="-98">
                                                                <option defaultValue="any" >Any</option>
                                                                <option defaultValue="1000">$1,000</option>
                                                                <option defaultValue="2000">$2,000</option>
                                                                <option defaultValue="3000">$3,000</option>
                                                                <option defaultValue="4000">$4,000</option>
                                                                <option defaultValue="5000">$5,000</option>
                                                                <option defaultValue="7500">$7,500</option>
                                                                <option defaultValue="10000">$10,000</option>
                                                                <option defaultValue="15000">$15,000</option>
                                                                <option defaultValue="20000">$20,000</option>
                                                                <option defaultValue="25000">$25,000</option>
                                                                <option defaultValue="30000">$30,000</option>
                                                                <option defaultValue="40000">$40,000</option>
                                                                <option defaultValue="50000">$50,000</option>
                                                                <option defaultValue="75000">$75,000</option>
                                                                <option defaultValue="100000">$100,000</option>
                                                                <option defaultValue="150000">$150,000</option>
                                                            </select><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="combobox" aria-owns="bs-select-9" aria-haspopup="listbox" aria-expanded="false" data-id="select-max-price-for-rent" title="Any"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Any</div></div> </div><span className="bs-caret"><span className="caret"></span></span></button><div className="dropdown-menu open"><div className="inner open" role="listbox" id="bs-select-9"  tabIndex="-1"><ul className="dropdown-menu inner " role="presentation"></ul></div></div></div>
                                                        </span>
                                                    </div><div className="rh_prop_search__option rh_prop_search__select rh_garages_field_wrapper inspiry_select_picker_field">
                                                        <label >
                                                            Min Garages </label>
                                                        <span className="rh_prop_search__selectwrap">
                                                            <div className="dropdown bootstrap-select show-tick inspiry_select_picker_trigger bs3" style={W_100}><select name="garages" id="select-garages" className="inspiry_select_picker_trigger show-tick" data-size="5" tabIndex="-98">
                                                                <option defaultValue="any" >Any</option>
                                                                <option defaultValue="1">1</option>
                                                                <option defaultValue="2">2</option>
                                                                <option defaultValue="3">3</option>
                                                                <option defaultValue="4">4</option>
                                                                <option defaultValue="5">5</option>
                                                                <option defaultValue="6">6</option>
                                                                <option defaultValue="7">7</option>
                                                                <option defaultValue="8">8</option>
                                                                <option defaultValue="9">9</option>
                                                                <option defaultValue="10">10</option>
                                                            </select><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="combobox" aria-owns="bs-select-10" aria-haspopup="listbox" aria-expanded="false" data-id="select-garages" title="Any"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Any</div></div> </div><span className="bs-caret"><span className="caret"></span></span></button><div className="dropdown-menu open"><div className="inner open" role="listbox" id="bs-select-10" tabIndex="-1"><ul className="dropdown-menu inner " role="presentation"></ul></div></div></div>
                                                        </span>
                                                    </div><div className="rh_prop_search__option rh_prop_search__select rh_agent_field_wrapper inspiry_select_picker_field">
                                                        <label >
                                                            Agent </label>
                                                        <span className="rh_prop_search__selectwrap">
                                                            <div className="dropdown bootstrap-select show-tick inspiry_select_picker_trigger bs3" style={W_100}><select name="agents[]" id="select-agent" className="inspiry_select_picker_trigger show-tick" data--text-format="count > 2" data-size="5" data-actions-box="true" data-live-search="true" title="All Agents" data-count--text="{0} Agents " multiple="" tabIndex="-98">
                                                                <option defaultValue="57">Nathan James</option>
                                                                <option defaultValue="54">Melissa William</option>
                                                                <option defaultValue="51">Alice Brian</option>
                                                                <option defaultValue="48">John David</option>
                                                            </select>
                                                            <button type="button" className="btn dropdown-toggle btn-default bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-11" aria-haspopup="listbox" aria-expanded="false" data-id="select-agent" title="All Agents">
                                                            <div className="filter-option"><div className="filter-option-inner">
                                                                <div className="filter-option-inner-inner">All Agents</div>
                                                                </div> </div><span className="bs-caret"><span className="caret">
                                                                </span></span></button><div className="dropdown-menu open">
                                                                    <div className="bs-searchbox">
                                                                    <input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-11" /></div><div className="bs-actionsbox"><div className="btn-group btn-group-sm btn-block"><button type="button" className="actions-btn bs-select-all btn btn-default"><span className="inspiry_select_bs_buttons inspiry_bs_select"><svg xmlnsDefault="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><polygon points="22.1 9 20.4 7.3 14.1 13.9 15.8 15.6 "></polygon><polygon points="27.3 7.3 16 19.3 9.6 12.8 7.9 14.5 16 22.7 29 9 "></polygon><polygon points="1 14.5 9.2 22.7 10.9 21 2.7 12.8 "></polygon></svg></span></button><button type="button" className="actions-btn bs-deselect-all btn btn-default"><span className="inspiry_select_bs_buttons inspiry_bs_deselect"><svg xmlnsDefault="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                                            
        <path className="inspiry_des rh-st0" d="M3.4 10.5H20c3.8 0 7 3.1 7 7v0c0 3.8-3.1 7-7 7h-6"></path><polyline className="inspiry_des rh-st0" points="8.4 15.5 3.4 10.5 8.4 5.5 "></polyline></svg></span></button></div></div><div className="inner open" role="listbox" id="bs-select-11" tabIndex="-1" aria-multiselectable="true"><ul className="dropdown-menu inner " role="presentation"></ul></div></div></div>
                                                        </span>
                                                    </div><div className="rh_prop_search__option rh_mod_text_field rh_min_area_field_wrapper">
                                                        <label >
                                                            <span className="label">
                                                                Min Area </span>
                                                            <span className="unit">
                                                                (sq ft) </span>
                                                        </label>
                                                        <input type="text" autoComplete="off" name="min-area" id="min-area" pattern="[0-9]+" defaultValue="" placeholder="Any" title="Only provide digits!"/>
                                                    </div><div className="rh_prop_search__option rh_mod_text_field rh_max_area_field_wrapper">
                                                        <label>
                                                            <span className="label">
                                                                Max Area </span>
                                                            <span className="unit">
                                                                (sq ft) </span>
                                                        </label>
                                                        <input type="text" autoComplete="off" name="max-area" id="max-area" pattern="[0-9]+" defaultValue="" placeholder="Any" title="Only provide digits!"/>
                                                    </div><div className="rh_prop_search__option rh_mod_text_field rh_keyword_field_wrapper">
                                                        <label >
                                                            Keyword </label>
                                                        <input type="text" name="keyword" id="keyword-txt" autoComplete="off" defaultValue="" placeholder="Any"/>
                                
                                                    </div><div className="rh_prop_search__option rh_mod_text_field rh_prop_id_field_wrapper">
                                                        <label >
                                                            Property ID </label>
                                                        <input type="text" name="property-id" autoComplete="off" id="property-id-txt" defaultValue="" placeholder="Any"/>
                                                    </div>
                                
                                                    </div>
                                                    <div className="more-options-mode-container">
                                                        <div className="more-options-wrapper more-options-wrapper-mode clearfix checkbox">
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-2-stories" name="features[]" defaultValue="2-stories"/>
                                                                <label >2 Stories <small>(6)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-26-ceilings" name="features[]" defaultValue="26-ceilings"/>
                                                                <label >26' Ceilings <small>(1)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-bike-path" name="features[]" defaultValue="bike-path"/>
                                                                <label >Bike Path <small>(2)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-central-cooling" name="features[]" defaultValue="central-cooling"/>
                                                                <label>Central Cooling <small>(5)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-central-heating" name="features[]" defaultValue="central-heating"/>
                                                                <label >Central Heating <small>(5)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-dual-sinks" name="features[]" defaultValue="dual-sinks"/>
                                                                <label >Dual Sinks <small>(7)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-electric-range" name="features[]" defaultValue="electric-range"/>
                                                                <label >Electric Range <small>(7)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-emergency-exit" name="features[]" defaultValue="emergency-exit"/>
                                                                <label >Emergency Exit <small>(3)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-fire-alarm" name="features[]" defaultValue="fire-alarm"/>
                                                                <label >Fire Alarm <small>(4)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-fire-place" name="features[]" defaultValue="fire-place"/>
                                                                <label >Fire Place <small>(5)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-home-theater" name="features[]" defaultValue="home-theater"/>
                                                                <label >Home Theater <small>(3)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-hurricane-shutters" name="features[]" defaultValue="hurricane-shutters"/>
                                                                <label >Hurricane Shutters <small>(1)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-jog-path" name="features[]" defaultValue="jog-path"/>
                                                                <label >Jog Path <small>(1)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-laundry-room" name="features[]" defaultValue="laundry-room"/>
                                                                <label >Laundry Room <small>(4)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-lawn" name="features[]" defaultValue="lawn"/>
                                                                <label >Lawn <small>(5)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-marble-floors" name="features[]" defaultValue="marble-floors"/>
                                                                <label >Marble Floors <small>(6)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-next-to-busy-way" name="features[]" defaultValue="next-to-busy-way"/>
                                                                <label >Next To Busy Way <small>(1)</small></label>
                                                            </div>
                                                            <div className="option-bar">
                                                                <input type="checkbox" id="feature-swimming-pool" name="features[]" className="swimming-pool"/>
                                                                <label >Swimming Pool <small>(5)</small></label>
                                                            </div>
                                                        </div>
                                                        <span className="open_more_features ">
                                                            Looking for certain features </span>
                                                    </div>
                                                </div>
                                            </div>
                                
                                
                                
                                        </div>
                                
                                        <div className="rh_prop_search__buttons">
                                
                                            <div className="rh_prop_search__btnWrap clearfix">
                                
                                                <div className="rh_prop_search__advance">
                                                    <a href="#" className="rh_prop_search__advance_btn">
                                                        <svg viewBox="0 0 32 32" xmlnsDefault="http://www.w3.org/2000/svg">
                                                            <g data-name="137-Zoom">
                                                                <circle className="icon-search-plus" cx="12" cy="12" r="11"></circle>
                                                                <line className="icon-search-plus" x1="20" x2="31" y1="20" y2="31"></line>
                                                                <line id="rh_icon__search" className="icon-search-plus" x1="12" x2="12" y1="6" y2="18"></line>
                                                                <line className="icon-search-plus" x1="18" x2="6" y1="12" y2="12"></line>
                                                            </g>
                                                        </svg>
                                                    </a>
                                
                                
                                                </div>
                                                <div className="rh_prop_search__searchBtn">
                                                    <button className="rh_btn rh_btn__prop_search" type="submit">
                                                        <svg viewBox="0 0 32 32" xmlnsDefault="http://www.w3.org/2000/svg">
                                                            <g data-name="32-Search">
                                                                <circle className="icon-search" cx="12" cy="12" r="11"></circle>
                                                                <line className="icon-search" x1="20" x2="31" y1="20" y2="31"></line>
                                                            </g>
                                                        </svg> <span>
                                                            Search </span>
                                                    </button>
                                                </div>
                                
                                            </div>
                                        </div>
                                
                                    </form>
                                
            </div>
            <section className="rh_section rh_wrap--padding rh_wrap--topPadding">
                <div className="rh_page rh_page--fullWidth">
                    <div className="rh_page__head rh_page__property">
                                    <div className="rh_page__property_title">
                                        <img className="only-for-print inspiry-qr-code" src="https://chart.googleapis.com/chart?cht=qr&amp;chs=90x90&amp;chl=https://modern.realhomes.io/property/home-in-merrick-way/&amp;choe=UTF-8" alt="Home in Merrick Way"/>
                                        <div className="page-breadcrumbs page-breadcrumbs-modern">
                                            <nav className="property-breadcrumbs">
                                                <ul>
                                                    <li> <a href="https://modern.realhomes.io/">Home</a><i className="breadcrumbs-separator fas fa-angle-right"></i></li>
                                                    <li> <a href="https://modern.realhomes.io/property-city/miami/">Miami</a></li>
                                                </ul>
                                            </nav>
                                        </div>

                                        <h1 className="rh_page__title">Home in {Data.address}</h1>

                                        <p className="rh_page__property_address">
                                            {Data.address}, {Data.city}, FL {Data.postal}, {Data.country} </p>

                                    </div>

                                    <div className="rh_page__property_price">
                                        <p className="status">
                                            For Sale </p>
                                        <p className="price">
                                            {Data.PRICE} </p>
                                    </div>
                    </div>
                    <div className="rh_property">
                        <div className="property-detail-slider-wrapper clearfix">
                            <div className="inspiry_property_masonry_style images_7">
                                <a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05-1240x720.jpg')"}}  data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05.jpg"></a>
                                <a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/living-00-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/living-00.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/living-00.jpg"></a><a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-03-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-03.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-03.jpg"><span>See All Photos (7)</span></a><a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/dining-00-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/dining-00.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/dining-00.jpg"></a><a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-02-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-02.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-02.jpg"></a><a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-02-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-02.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-02.jpg"><span>See All Photos (7)</span></a>
                                <a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-04-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-04.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-04.jpg"></a>
                            </div>
                        </div>
                        <div className="print-property-gallery only-for-print">
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05-1240x720.jpg" alt="exterior-05"/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/living-00-1240x720.jpg" alt=""/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-03-1240x720.jpg" alt=""/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/dining-00-1240x720.jpg" alt=""/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-02-1240x720.jpg" alt="bedroom-02"/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-02-1240x720.jpg" alt=""/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-04-1240x720.jpg" alt=""/>
                        </div>
                        <div className="rh_property__wrap rh_property--padding">
                                        <div className="rh_property__main">
                                            <div id="property-content" className="rh_property__content clearfix">
                                                <div id="property-content-section-overview" className="property-content-section property-overview">
                                                    <div className="rh_property__row rh_property__meta rh_property--borderBottom">
                                                        <div className="rh_property__id">
                                                            <p className="title">Property ID:</p>
                                                            <p className="id">
                                                                &nbsp;{Data.id} </p>
                                                        </div>
                                                        <div className="rh_property__print">
                                                            <a href="#" className="share" id="social-share" data-tooltip="Share">
                                                                
                                                            </a>
                                                            <div className="share-this sharer-0" data-check-mobile="" data-property-name="Home in Merrick Way" data-property-permalink="https://modern.realhomes.io/property/home-in-merrick-way/" style={Block}><label className="entypo-export"><span>Share</span></label><div className="social load bottom center networks-5"><ul><li className="entypo-pinterest" data-network="pinterest"></li><li className="entypo-twitter" data-network="twitter"></li><li className="entypo-facebook" data-network="facebook"></li><li className="entypo-paper-plane" data-network="email"></li><li className="inspiry_whats_app_share"><a className="fab fa-whatsapp inspiry_whats_app_share_link" href="https://api.whatsapp.com/send?text=Home%20in%20Merrick%20Way%20https%3A%2F%2Fmodern.realhomes.io%2Fproperty%2Fhome-in-merrick-way%2F" target="_blank"></a></li> </ul></div></div>
                                                            <span className="favorite-btn-wrap favorite-btn-45">
                                                                <span className="favorite-placeholder highlight__red hide user_not_logged_in" data-propertyid="45" data-tooltip="Added to favorites">
                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
                                                                        <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
                                                                    </svg>
                                                                </span>
                                                                <a href="#" className="favorite add-to-favorite user_not_logged_in" data-propertyid="45" data-tooltip="Add to favorites">
                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
                                                                        <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
                                                                    </svg>							
                                                                </a>
                                                            </span>
                                                            <span className="rh_single_compare_button add-to-compare-span compare-btn-45" data-property-id="45" data-property-title="Home in Merrick Way" data-property-url="https://modern.realhomes.io/property/home-in-merrick-way/" data-property-image="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05-488x326.jpg">
                                                                <span className="compare-placeholder highlight hide" data-tooltip="Added to compare">
                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
                                                                    </svg>
                                                                </span>
                                                                <a className="rh_trigger_compare add-to-compare" data-tooltip="Add to compare" href="https://modern.realhomes.io/property/home-in-merrick-way/">
                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
                                                                    </svg>
                                                                </a>
                                                            </span>
                                                            <a href="javascript:window.print()" className="print" data-tooltip="Print">
                                                                
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="rh_property__row rh_property__meta_wrap">
                                                        <div className="rh_property__meta prop_bedrooms">
                                                            <span className="rh_meta_titles">
                                                                Bedrooms
                                                            </span>
                                                            <div>
                                                                <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)"></path>
                                                                </svg>
                                                                <span className="figure">{Data.beds}</span>
                                                            </div>
                                                        </div>
                                                        <div className="rh_property__meta prop_bathrooms">
                                                            <span className="rh_meta_titles">
                                                                Bathrooms            
                                                            </span>
                                                            <div>
                                                                <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="23.69" height="24" viewBox="0 0 23.69 24">
                                                                    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)"></path>
                                                                </svg>
                                                                <span className="figure">{Data.baths}</span>
                                                            </div>
                                                        </div>

                                                        <div className="rh_property__meta prop_garages">
                                                            <span className="rh_meta_titles">
                                                                Garage
                                                            </span>
                                                            <div>
                                                                <span className="figure">
                                                                    {Data.garage}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="rh_property__meta prop_year_built">
                                                            <span className="rh_meta_titles">
                                                                Year Built 
                                                        </span>
                                                            <div>
                                                                
                                                                <span className="figure">
                                                                    {Data.yearBuild}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="rh_property__meta prop_area">
                                                            <span className="rh_meta_titles">
                                                                Area
                                                            </span>
                                                            <div>
                                                                
                                                                <span className="figure">
                                                                    {Data.square}
                                                                </span>
                                                                <span className="label">
                                                                    Sq Ft	
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="rh_property__meta prop_lot_size">
                                                            <span className="rh_meta_titles">
                                                                Lot Size 
                                                        </span>
                                                            <div>
                                                                <svg width="24" height="24" xmlnsDefault="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                    <rect fill="none" height="26" width="26" y="-1" x="-1"></rect>
                                                                    </g>
                                                                    <g>
                                                                    <rect x="1" y="1" id="svg_1" width="32" height="32" fill="none"></rect>
                                                                    <path className="rh_svg" stroke="null" fill="#1ea69a" id="svg_2" d="m23.952237,12l-4.482089,-4.170255l0,2.78017l-1.49403,0l0,-4.170255l-4.482089,0l0,-1.390085l2.988059,0l-4.482089,-4.170255l-4.482089,4.170255l2.988059,0l0,1.390085l-4.482089,0l0,4.170255l-1.49403,0l0,-2.78017l-4.482089,4.170255l4.482089,4.170255l0,-2.78017l1.49403,0l0,4.170255l4.482089,0l0,1.390085l-2.988059,0l4.482089,4.170255l4.482089,-4.170255l-2.988059,0l0,-1.390085l4.482089,0l0,-4.170255l1.49403,0l0,2.78017l4.482089,-4.170255zm-7.470148,4.170255l-8.964178,0l0,-8.34051l8.964178,0l0,8.34051z"></path>
                                                                    </g>
                                                                </svg> 
                                                                <span className="figure">
                                                                    {Data.lot}
                                                                </span>
                                                                <span className="label">
                                                                    Sq Ft	
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-content" className="property-content-section">
                                                    <h4 className="rh_property__heading">Description </h4>
                                                    <div className="rh_content">

                                                        <p>{Data.description}</p>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-additional-details" className="property-content-section">
                                                    <h4 className="rh_property__heading rh_property__additional_details">Additional Details</h4>
                                                    <div className="rh-property-additional-inner-wrap">
                                                        <ul className="rh_property__additional clearfix">
                                                            <li>
                                                                <span className="title">BEDROOM FEATURES:</span>
                                                                <span className="value">{Data.bedroomFeature}</span>
                                                            </li>
                                                            <li>
                                                                <span className="title">DINING AREA:</span>
                                                                <span className="value">{Data.diningArea}</span>
                                                            </li>
                                                            <li>
                                                                <span className="title">DOORS &amp; WINDOWS:</span>
                                                                <span className="value">{Data.doorsWindows}</span>
                                                            </li>
                                                            <li>
                                                                <span className="title">ENTRY LOCATION:</span>
                                                                <span className="value">{Data.entryLocation}</span>
                                                            </li>
                                                            <li>
                                                                <span className="title"></span>
                                                                <span className="value">{Data.exteriorConstruction}</span>
                                                            </li>
                                                            <li>
                                                                <span className="title">FLOORS:</span>
                                                                <span className="value">{Data.floors}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="rh_property__common_note">
                                                    <h4 className="rh_property__heading">Common Note</h4>
                                                    <div className="rh-property-note-inner-wrap">
                                                        <p>This is a sample note to share some basic information on all properties. This note can be enabled or disabled from Real Homes settings and its text plus label is fully customizable.</p>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-features" className="property-content-section rh_property__features_wrap">
                                                    <h4 className="rh_property__heading">Features</h4>
                                                    <div className="rh-property-features-inner-wrap">
                                                        <ul className="rh_property__features arrow-bullet-list">
                                                            <li className="rh_property__feature" id="rh_property__feature_17"><span className="rh_done_icon">
                                                                
    </span><a href="https://modern.realhomes.io/property-feature/2-stories/">2 Stories</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_19"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/bike-path/">Bike Path</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_20"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/central-cooling/">Central Cooling</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_21"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/central-heating/">Central Heating</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_23"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/dual-sinks/">Dual Sinks</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_24"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/electric-range/">Electric Range</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_27"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/fire-place/">Fire Place</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_30"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/home-theater/">Home Theater</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_33"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/laundry-room/">Laundry Room</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_34"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/lawn/">Lawn</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_35"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/marble-floors/">Marble Floors</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_43"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/swimming-pool/">Swimming Pool</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <div id="property-content-section-attachments" className="property-content-section rh_property__attachments_wrap">
                                                    <h4 className="rh_property__heading">Property Attachments</h4>
                                                    <div className="rh-property-attachments-inner-wrap">
                                                        <ul className="rh_property__attachments">
                                                            <li className="docx"><a target="_blank" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/demo.docx"><i className="far fa-file-word"></i>Demo Word Document</a></li>
                                                            <li className="pdf"><a target="_blank" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/demo.pdf"><i className="far fa-file-pdf"></i>Demo PDF Document</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-energy-performance" className="property-content-section rh_property__energy_performance_wrap">
                                                    <h4 className="rh_property__heading">Energy Performance</h4>
                                                    <div className="energy-performance">
                                                        <ul style={{borderColor:"#8dc643"}} className="epc-details clearfix class-b">
                                                            <li>
                                                                <strong>Energy Class:</strong>
                                                                <span>B</span>
                                                            </li>
                                                            <li>
                                                                <strong>Energy Performance:</strong>
                                                                <span>82 kWh/m²a</span>
                                                            </li>
                                                            <li>
                                                                <strong><abbr title="Energy Performance Certificate">EPC</abbr> Current Rating:</strong>
                                                                <span></span>
                                                            </li>
                                                            <li>
                                                                <strong><abbr title="Energy Performance Certificate">EPC</abbr> Potential Rating:</strong>
                                                                <span>86</span>
                                                            </li>
                                                        </ul>
                                                        <ul className="energy-class">
                                                            <li className="a+" style={{backgroundColor:"#00845a"}}>A+</li>
                                                            <li className="a" style={{backgroundColor:"#18b058"}}>A</li>
                                                            <li className="current B" style={{backgroundColor:"#8dc643"}}><span style={{borderTopColor:"#8dc643"}}></span>B</li>
                                                            <li className="c" style={{backgroundColor:"#ffcc01"}}>C</li>
                                                            <li className="d" style={{backgroundColor:"#f6ac63"}}>D</li>
                                                            <li className="e" style={{backgroundColor:"#f78622"}}>E</li>
                                                            <li className="f" style={{backgroundColor:"#ef1d3a"}}>F</li>
                                                            <li className="g" style={{backgroundColor:"#d10400"}}>G</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-video" className="property-content-section rh_property__video">
                                                    <h4 className="rh_property__heading">Property Video</h4>
                                                    <div className="rh-property-videos-slider-inner-wrap">
                                                        <div className="rh_wrapper_property_videos_slider flexslider">
                                                            <ul className="slides">
                                                                <li style={Block}>
                                                                    <div className="rh_property_video">
                                                                        <div className="rh_property_video_inner">
                                                                            <h5 className="rh_video_title">Video Tour</h5>
                                                                            <a data-fancybox="" href="https://www.youtube.com/watch?v=PkjpPQxknPg" className="inspiry-lightbox-item" data-autoplay="true" data-vbtype="video">
                                                                                <div className="play-btn"></div>
                                                                                <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05-818x417.jpg" alt="Home in Merrick Way"/> </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-virtual-tour" className="property-content-section rh_property__virtual_tour">
                                                    <h4 className="rh_property__heading">Virtual Tour</h4>
                                                    <div className="rh-property-virtual-tour-inner-wrap">
                                                        <iframe src="https://my.matterport.com/show/?m=JGPnGQ6hosj&amp;play=1" width="100%" height="auto" allowvr="" allowfullscreen="allowfullscreen"></iframe> </div>
                                                </div>
                                                
                                            </div>

                                            {/* <section className="rh_property__similar_properties">
                                                <h3 className="rh_property__heading">Similar Properties</h3>
                                                <div id="similar-properties-filters-wrapper" className="similar-properties-filters-wrapper"><a className="rh-btn rh-btn-secondary current" href="#recommended" data-similar-properties-filter="recommended">Recommended</a><a className="rh-btn rh-btn-primary" href="#property-feature" data-similar-properties-filter="property-feature">Property Features</a>
                                                    <a className="rh-btn rh-btn-primary" href="#property-type" data-similar-properties-filter="property-type">Property Type</a><a className="rh-btn rh-btn-primary" href="#property-city" data-similar-properties-filter="property-city">Property Location</a><a className="rh-btn rh-btn-primary" href="#property-status" data-similar-properties-filter="property-status">Property Status</a>
                                                        <a className="rh-btn rh-btn-primary" href="#property-agent" data-similar-properties-filter="property-agent">Property Agent</a>
                                                </div>
                                                <div id="similar-properties-wrapper" className="similar-properties-wrapper">
                                                    <div className="rh-loader">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div id="similar-properties" className="rh_property__container rh_similar_properties_box">

                                                        <article className="rh_prop_card rh_prop_card--listing">

                                                            <div className="rh_prop_card__wrap">


                                                                <figure className="rh_prop_card__thumbnail">
                                                                    <div className="rh_figure_property_one">
                                                                        <a href="https://modern.realhomes.io/property/villa-in-coral-gables/">
                        <img width="680" height="510" src="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-04-680x510.jpg" className="attachment-modern-property-child-slider size-modern-property-child-slider wp-post-image" alt="Villa" decoding="async"/>                </a>

                                                                        <div className="rh_overlay"></div>
                                                                        <div className="rh_overlay__contents rh_overlay__fadeIn-bottom">
                                                                            <a href="https://modern.realhomes.io/property/villa-in-coral-gables/">View Property</a>
                                                                        </div>

                                                                    </div>
                                                                    <div className="rh_prop_card__btns">
                                                                        <span className="favorite-btn-wrap favorite-btn-101">
                                <span className="favorite-placeholder highlight__red hide user_not_logged_in" data-propertyid="101" data-tooltip="Added to favorites">
                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
    <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
    </svg>							</span>
                                                                        <a href="#" className="favorite add-to-favorite user_not_logged_in" data-propertyid="101" data-tooltip="Add to favorites">
                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
    <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
    </svg>							</a>
                                                                        </span>
                                                                        <span className="add-to-compare-span compare-btn-101" data-property-id="101" data-property-title="Villa in Coral Gables" data-property-url="https://modern.realhomes.io/property/villa-in-coral-gables/" data-property-image="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-04-488x326.jpg">
                        <span className="compare-placeholder highlight hide" data-tooltip="Added to compare">
                            <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
    </svg>
                        </span>
                                                                        <a className="rh_trigger_compare add-to-compare" href="https://modern.realhomes.io/property/villa-in-coral-gables/" data-tooltip="Add to compare">
                            <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
    </svg>
                        </a>
                                                                        </span>
                                                                    </div>
                                                                </figure>

                                                                <div className="rh_prop_card__details">

                                                                    <h3>
                                                                        <a href="https://modern.realhomes.io/property/villa-in-coral-gables/">Villa in Coral Gables</a>
                                                                    </h3>

                                                                    <p className="rh_prop_card__excerpt">Enjoy serenity of Deering Bay whole day from this spectacular…</p>
                                                                    

                                                                    <div className="rh_prop_card__meta_wrap">

                                                                        <div className="rh_prop_card_meta_theme_stylish">
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Bedrooms</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                    <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <defs>
    </defs>
    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)"></path>
    </svg>
                                                                                    <span className="figure">{Data.beds}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Bathrooms</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                    <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="23.69" height="24" viewBox="0 0 23.69 24">
    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)"></path>
    </svg>
                                                                                    <span className="figure">3.5</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Area</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                
                                                                                    <span className="figure">3500</span>
                                                                                    <span className="label">Sq Ft</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="rh_prop_card__priceLabel">

                                                                        <span className="rh_prop_card__status">
                        For Sale				</span>


                                                                        <p className="rh_prop_card__price">
                                                                            $825,000
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </article>

                                                        <article className="rh_prop_card rh_prop_card--listing">

                                                            <div className="rh_prop_card__wrap">

                                                                <div className="rh_label rh_label__property_grid">
                                                                    <div className="rh_label__wrap">
                                                                        Featured <span></span>
                                                                    </div>
                                                                </div>

                                                                <figure className="rh_prop_card__thumbnail">
                                                                    <div className="rh_figure_property_one">
                                                                        <a href="https://modern.realhomes.io/property/home-in-coral-gables/">
                        <img width="680" height="510" src="https://modern.b-cdn.net/wp-content/uploads/2020/06/exterior-00-680x510.jpg" className="attachment-modern-property-child-slider size-modern-property-child-slider wp-post-image" alt="" decoding="async" loading="lazy"/>                </a>

                                                                        <div className="rh_overlay"></div>
                                                                        <div className="rh_overlay__contents rh_overlay__fadeIn-bottom">
                                                                            <a href="https://modern.realhomes.io/property/home-in-coral-gables/">View Property</a>
                                                                        </div>

                                                                    </div>
                                                                    <div className="rh_prop_card__btns">
                                                                        <span className="favorite-btn-wrap favorite-btn-42">
                                <span className="favorite-placeholder highlight__red hide user_not_logged_in" data-propertyid="42" data-tooltip="Added to favorites">
                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
    <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
    </svg>							</span>
                                                                        <a href="#" className="favorite add-to-favorite user_not_logged_in" data-propertyid="42" data-tooltip="Add to favorites">
                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
    <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
    </svg>							</a>
                                                                        </span>
                                                                        <span className="add-to-compare-span compare-btn-42" data-property-id="42" data-property-title="Home in Coral Gables" data-property-url="https://modern.realhomes.io/property/home-in-coral-gables/" data-property-image="https://modern.b-cdn.net/wp-content/uploads/2020/06/exterior-00-488x326.jpg">
                        <span className="compare-placeholder highlight hide" data-tooltip="Added to compare">
                            <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
    </svg>
                        </span>
                                                                        <a className="rh_trigger_compare add-to-compare" href="https://modern.realhomes.io/property/home-in-coral-gables/" data-tooltip="Add to compare">
                            <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
    </svg>
                        </a>
                                                                        </span>
                                                                    </div>
                                                                </figure>

                                                                <div className="rh_prop_card__details">

                                                                    <h3>
                                                                        <a href="https://modern.realhomes.io/property/home-in-coral-gables/">Home in Coral Gables</a>
                                                                    </h3>

                                                                    <p className="rh_prop_card__excerpt">Elegant retreat in a quiet Coral Gables setting. This home…</p>
                                                                    

                                                                    <div className="rh_prop_card__meta_wrap">

                                                                        <div className="rh_prop_card_meta_theme_stylish">
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Bedrooms</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                    <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <defs>
    </defs>
    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)"></path>
    </svg>
                                                                                    <span className="figure">4</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Bathrooms</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                    <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="23.69" height="24" viewBox="0 0 23.69 24">
    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)"></path>
    </svg>
                                                                                    <span className="figure">4.5</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Area</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                    
                                                                                    <span className="figure">3800</span>
                                                                                    <span className="label">Sq Ft</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="rh_prop_card__priceLabel">

                                                                        <span className="rh_prop_card__status">
                        For Sale				</span>


                                                                        <p className="rh_prop_card__price">
                                                                            $850,000
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </article>
                                                    </div>
                                                </div>
                                            </section>

                                            <section className="rh_property__comments">
                                                <div className="property-comments">
                                                    <div id="comments">
                                                        <div className="rh_comments__header">
                                                            <h3 id="comments-title">
                                                                <i className="fas fa-comments" aria-hidden="true"></i>
                                                                1 Comment 
                                                            </h3>
                                                            <div className="inspiry_rating_right">
                                                                <div className="stars-avg-rating inspiry_stars_avg_rating">
                                                                    <span className="rating-stars">
                                                                        <i className="fas fa-star rated"></i>
                                                                        <i className="fas fa-star rated"></i>
                                                                        <i className="fas fa-star rated"></i>
                                                                        <i className="fas fa-star rated"></i>
                                                                        <i className="fas fa-star rated"></i>
                                                                    </span>
                                                                    <span className="rating-span">
                                                                        5               
                                                                        <i className="rvr_rating_down fas fa-angle-down"></i>
                                                                        Review 1            
                                                                    </span>
                                                                    <div className="inspiry_wrapper_rating_info">
                                                                        <p className="inspiry_rating_percentage">
                                                                            <span className="inspiry_rating_sorting_label">
                                                                                5 Stars  
                                                                            </span>
                                                                            <span className="inspiry_rating_line">
                                                                                <span className="inspiry_rating_line_inner" style={W_100}></span>
                                                                            </span>
                                                                            <span className="inspiry_rating_text">
                                                                                <span className="inspiry_rating_text_inner">
                                                                                    100%    
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <p className="inspiry_rating_percentage">
                                                                            <span className="inspiry_rating_sorting_label">
                                                                                4 Stars
                                                                            </span>
                                                                            <span className="inspiry_rating_line">
                                                                                <span className="inspiry_rating_line_inner" style={{width:0}}></span>
                                                                            </span>
                                                                            <span className="inspiry_rating_text">
                                                                                <span className="inspiry_rating_text_inner">
                                                                                    0%
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <p className="inspiry_rating_percentage">
                                                                            <span className="inspiry_rating_sorting_label">
                                                                                3 Stars
                                                                            </span>

                                                                            <span className="inspiry_rating_line">
                                    <span className="inspiry_rating_line_inner" style={{width:0}}></span>
                                                                            </span>

                                                                            <span className="inspiry_rating_text">
                                <span className="inspiry_rating_text_inner">

                                    0%                            </span>
                                                                            </span>
                                                                        </p>
                                                                        <p className="inspiry_rating_percentage">
                                                                            <span className="inspiry_rating_sorting_label">
                                    2 Stars                            </span>

                                                                            <span className="inspiry_rating_line">
                                    <span className="inspiry_rating_line_inner" style={{width:0}}></span>
                                                                            </span>

                                                                            <span className="inspiry_rating_text">
                                <span className="inspiry_rating_text_inner">

                                    0%                            </span>
                                                                            </span>
                                                                        </p>
                                                                        <p className="inspiry_rating_percentage">
                                                                            <span className="inspiry_rating_sorting_label">
                                    1 Star                            </span>

                                                                            <span className="inspiry_rating_line">
                                    <span className="inspiry_rating_line_inner" style={{width:0}}></span>
                                                                            </span>

                                                                            <span className="inspiry_rating_text">
                                <span className="inspiry_rating_text_inner">

                                    0%                            </span>
                                                                            </span>
                                                                        </p>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ol className="commentlist">
                                                            <li className="comment even thread-even depth-1" id="li-comment-96">
                                                                <article id="comment-96">
                                                                    <a href="https://inspirythemes.com/"><img alt="" src="https://secure.gravatar.com/avatar/72437d09babba5f052666cc37c91f152?s=110&amp;d=mm&amp;r=g" srcset="https://secure.gravatar.com/avatar/72437d09babba5f052666cc37c91f152?s=220&amp;d=mm&amp;r=g 2x" className="avatar avatar-110 photo" height="110" width="110" loading="lazy" decoding="async"/></a>
                                                                    <div className="comment-detail-wrap">
                                                                        <span className="comment-detail-wrap-arrow"></span>
                                                                        <div className="comment-meta">
                                                                            <h5 className="author">
                                                                                <cite className="fn"><a href="https://inspirythemes.com/" rel="external nofollow ugc" className="url">John Doe</a></cite> </h5>
                                                                            <p>
                                                                                <span className="commented-on">on</span>
                                                                                <a href="https://modern.realhomes.io/property/home-in-merrick-way/#comment-96">
                                        <time datetime="2020-10-21T10:43:49+00:00">
                                            October 21, 2020 at 10:43 am                                    </time>
                                    </a>
                                                                                <span className="commented">said</span>&nbsp;&nbsp;
                                                                            </p>
                                                                        </div>
                                                                        <div className="comment-body">
                                                                            <p>This is a sample comment. We have been extremely pleased with your attentiveness, communication, honesty and advice throughout the entire process. Selling a house is a stressful occurrence
                                                                                for anyone and you have helped to make it as smooth as possible for us. We feel that you truly go beyond the general duties of a real estate agent with thorough follow ups, reporting
                                                                                and always being ‘on top’ of potential buyers.</p>
                                                                            <p><span className="rating-stars"><i className="fas fa-star rated"></i><i className="fas fa-star rated"></i><i className="fas fa-star rated"></i><i className="fas fa-star rated"></i><i className="fas fa-star rated"></i></span></p>
                                                                            <a rel="nofollow" className="comment-reply-link" href="https://modern.realhomes.io/property/home-in-merrick-way/?replytocom=96#respond" data-commentid="96" data-postid="45" data-belowelement="comment-96" data-respondelement="respond" data-replyto="Reply to John Doe" aria-label="Reply to John Doe">Reply</a> </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                        </ol>

                                                        <div id="respond" className="comment-respond">
                                                            <h3 id="reply-title" className="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="/property/home-in-merrick-way/#respond" style={{display:"none"}}>Cancel reply</a></small></h3>
                                                            <form action="https://modern.realhomes.io/wp-comments-post.php" method="post" id="commentform" className="comment-form">
                                                                <div className="stars-comment-rating">
                                                                    <div className="rating-box">
                                                                        <div className="br-wrapper br-theme-fontawesome-stars"><select id="rate-it" name="inspiry_rating" style={{display:"none"}}>
                            <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5" selected="">5</option>					</select><div className="br-widget"><a href="#" data-rating-value="1" data-rating-text="1" className="br-selected"></a><a href="#" data-rating-value="2" data-rating-text="2" className="br-selected"></a><a href="#" data-rating-value="3" data-rating-text="3" className="br-selected"></a><a href="#" data-rating-value="4" data-rating-text="4" className="br-selected"></a><a href="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"></a><div className="br-current-rating">5</div></div></div>
                                                                    </div>
                                                                </div>
                                                                <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> <span className="required-field-message">Required fields are marked <span className="required">*</span></span>
                                                                </p>
                                                                <p className="comment-form-comment"><label htmlFor="comment">Comment <span className="required">*</span></label> <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea></p>
                                                                <p className="comment-form-author"><label htmlFor="author">Name <span className="required">*</span></label> <input id="author" name="author" type="text" value="" size="30" maxlength="245" autoComplete="name" required="required"/></p>
                                                                <p className="comment-form-email"><label htmlFor="email">Email <span className="required">*</span></label> <input id="email" name="email" type="text" value="" size="30" maxlength="100" aria-describedby="email-notes" autoComplete="email" required="required"/></p>
                                                                <p className="comment-form-url"><label htmlFor="url">Website</label> <input id="url" name="url" type="text" value="" size="30" maxlength="200" autoComplete="url"/></p>
                                                                <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" value="Post Comment"/> <input type="hidden" name="comment_post_ID" value="45" id="comment_post_ID" />
                                                                    <input type="hidden" name="comment_parent" id="comment_parent" value="0"/>
                                                                </p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section> */}
                                        </div>

                                        <div className="rh_property__sidebar" data-sticky="true" data-top-gap="60" data-bottom-gap="60" style={{position:"sticky",top:'-1168px',height:'fit-content'}}>
                                            <aside className="rh_sidebar">
                                                <section className="widget rh_property_agent  ">
                                                    <a className="agent-image" href="https://modern.realhomes.io/agent/melissa-william/">
                                                        <img width="210" height="210" src="https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-female-00-210x210.jpg" className="attachment-agent-image size-agent-image wp-post-image" alt="Real Estate Agent" decoding="async" loading="lazy" srcset="https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-female-00-210x210.jpg 210w, https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-female-00-300x300.jpg 300w, https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-female-00-150x150.jpg 150w, https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-female-00.jpg 514w" sizes="(max-width: 210px) 100vw, 210px"/>                
                                                    </a>
                                                    <h3 className="rh_property_agent__title">
                                                        {/* {Data.excuse}  */}Emma
                                                        </h3>
                                                    <div className="rh_property_agent__agent_info">
                                                        <p className="contact mobile">
                                                            <span>Mobile:&nbsp;</span>
                                                            <a href="tel:1-234-456-7892">1-234-456-7892</a>
                                                        </p>
                                                        <p className="contact whatsapp">
                                                            <span>WhatsApp:&nbsp;</span>
                                                            <a href="https://wa.me/1-234-456-7895">1-234-456-7895</a>
                                                        </p>
                                                        <p className="contact email">
                                                            <span>Email:&nbsp;</span>
                                                            <a href="mailto:melissa@realhomes.io">melissa@realhomes.io</a>
                                                        </p>
                                                    </div>
                                                </section>
                                                
                                            </aside>
                                        </div>
                                    </div>
                    </div>
                </div>
            </section>
        </div>
    ) 
}

export default Property