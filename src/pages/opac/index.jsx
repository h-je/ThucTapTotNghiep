import React, { useState, useEffect } from 'react'
import { Link, Plus, Search } from 'react-feather';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ReactPaginate from 'react-paginate';
import 'react-tabs/style/react-tabs.css';
import Card from '../../components/Card';
import axios from 'axios';
import SmoothCollapse from 'react-smooth-collapse';
import SearchInfo from '../../components/SearchInfo';
import { StyledPaginate } from './style';
import { useSelector } from 'react-redux';
import { uiSelector } from '../../redux/slice/ui';
import Header from '../../components/layout/Header';
import SearchKey from '../opac/SearchKey'

const Opac = () => {
    const tabIndex = useSelector(uiSelector)
    const [books, setBooks] = useState([])
    const [expand, setExpand] = useState(false)
    const [expand1, setExpand1] = useState(false)
    const [expand2, setExpand2] = useState(false)
    const [expand3, setExpand3] = useState(false)
    const [expand4, setExpand4] = useState(false)
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const itemsPerPage = 1
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % books?.length;
        setItemOffset(newOffset);
    };
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(books.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(books.length / itemsPerPage));
    }, [books, itemOffset, itemsPerPage])
    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get("https://6241af7e9b450ae274437a35.mockapi.io/books")

            setBooks(response.data)

        }
        fetchBook()

    }, [])
    return (
        <div >
            <div className="bg-[url('assets/background.jpg')] bg-cover  text-white "  >
            <Header />
            </div>
            <div className='container grid grid-cols-3 gap-x-10'>
                <div className='col-span-1 mt-6'>
                    <div className='border-2 mb-10'>
                        <div className='flex cursor-pointer gap-x-3 items-center bg-gray-300 px-3 py-2' onClick={() => setExpand(!expand)}>
                            <Plus size={18} />
                            <div className='font-bold '>Tổng số ấn phẩm</div>
                        </div>
                        <SmoothCollapse expanded={expand}>
                            <div className='flex px-5 py-5'>
                                <a href="/">TVQG</a>
                                <div className='ml-auto'>9856</div>
                            </div>
                        </SmoothCollapse>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <div className='border-2'>
                            <div className='flex cursor-pointer gap-x-3 items-center bg-gray-300 px-3 py-2' onClick={() => setExpand1(!expand1)}>
                                <Plus size={18} />
                                <div className='font-bold '>Loại tài liệu</div>
                            </div>
                            <SmoothCollapse expanded={expand1}>
                                <div className='flex px-5 py-5'>
                                    <a href="/">TVQG</a>
                                    <div className='ml-auto'>9856</div>
                                </div>
                            </SmoothCollapse>
                        </div>
                        <div className='border-2'>
                            <div className='flex cursor-pointer gap-x-3 items-center bg-gray-300 px-3 py-2' onClick={() => setExpand2(!expand2)}>
                                <Plus size={18} />
                                <div className='font-bold'>Tác giả</div>
                            </div>
                            <SmoothCollapse expanded={expand2}>
                                <div className='flex px-5 py-5'>
                                    <a href="/">TVQG</a>
                                    <div className='ml-auto'>9856</div>
                                </div>
                            </SmoothCollapse>
                        </div>
                        <div className='border-2'>
                            <div className='flex cursor-pointer gap-x-3 items-center bg-gray-300 px-3 py-2' onClick={() => setExpand3(!expand3)}>
                                <Plus size={18} />
                                <div className='font-bold'>Năm xuất bản</div>
                            </div>
                            <SmoothCollapse expanded={expand3}>
                                <div className='flex px-5 py-5'>
                                    <a href="/">TVQG</a>
                                    <div className='ml-auto'>9856</div>
                                </div>
                            </SmoothCollapse>
                        </div>
                        <div className='border-2'>
                            <div className='flex cursor-pointer gap-x-3 items-center bg-gray-300 px-3 py-2' onClick={() => setExpand4(!expand4)}>
                                <Plus size={18} />
                                <div className='font-bold'>Từ khoá</div>
                            </div>
                            <SmoothCollapse expanded={expand4}>
                                <div className='flex px-5 py-5'>
                                    <a href="/">TVQG</a>
                                    <div className='ml-auto'>9856</div>
                                </div>
                            </SmoothCollapse>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <Tabs className="mt-6" defaultIndex={tabIndex}>
                        <TabList>
                            <Tab>
                                TÌM NHANH
                            </Tab>
                            <Tab >
                                CƠ BẢN
                            </Tab>
                            <Tab>
                                NÂNG CAO
                            </Tab>
                        </TabList>
                        <TabPanel>

                            <SearchKey />
                        </TabPanel>
                        <TabPanel>
                            Content 2
                        </TabPanel>
                        <TabPanel>
                            Content 3
                        </TabPanel>
                    </Tabs>
                    <SearchInfo />
                    <div className='my-5 '>
                        {books && (<StyledPaginate>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={4}
                                pageCount={pageCount}
                                previousLabel="< previous"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                containerClassName="pagination"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            />
                        </StyledPaginate>)}
                    </div>

                    <div className='flex flex-col gap-y-5'>
                        {books && books.map(book => <Card book={book} />)}
                    </div>
                    <div className='my-10 '>
                        {books && (<StyledPaginate>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={4}
                                pageCount={pageCount}
                                previousLabel="< previous"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                containerClassName="pagination"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            />
                        </StyledPaginate>)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opac