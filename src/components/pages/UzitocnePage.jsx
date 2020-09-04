import React, { useContext, useState } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import LoginNavigationBar from "../login-navigationbar/LoginNavigationBar";
import { UserContext } from "../../context/UserContext";
import { highlight } from './highlight';
import './uzitocne.css'
import Test1 from '../test/Test1';
import Test2 from '../testcomponents/Test1';
import DevTools from "../../devtools/devtools";
import styles from '../../devtools/devtoolsStyles.css'


const UzitocnePage = () => {
  const { user, setUser } = useContext(UserContext);
  const [show, setIsShown] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [columnData, setColumnData] = useState("Handle")
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  //const iframeRef = useRef(null);
  const defaultTabID = 'components';

  const [tabID, setTabID] = useState(defaultTabID);

  const handleChange = (e) => {
    e.preventDefault()
    setColumnData(e.target.value)
  }

  const saveEdited = () => {
    setShowInput(false)
  }

  let target = null
  function handleMousemove(e) {
    target = e.target;
    if (target.nodeName == "TH") {
      const checkButton = document.querySelector('.btn-to-delete')
      if (!checkButton) {
        const divWithButton = document.createElement('button')

        divWithButton.innerHTML = '<i class="fas fa-plus"></i>'
        divWithButton.style.position = "absolute"
        divWithButton.style.opacity = 0.5;
        divWithButton.style.top = 0;
        divWithButton.style.right = 0;
        divWithButton.classList.add('btn')
        divWithButton.classList.add('btn-primary')
        divWithButton.classList.add('btn-sm')
        divWithButton.classList.add('addButton')
        divWithButton.classList.add('btn-to-delete')
        divWithButton.style.borderRadius = "50px"
        divWithButton.style.display = "inline"
        divWithButton.style.marginLeft = "2rem"
        divWithButton.addEventListener('mouseover', (e) => showSelect(e))
        console.log("Created Button")
        target.appendChild(divWithButton)
      }
    }
    //if (target.nodeName !== "TH" || target.nodeName !== "BUTTON") {
    // console.log("Other element")
    //const butt = document.querySelector('.btn-to-delete')
    //if (butt) { butt.parentNode.removeChild(butt); }
    //}
    if (target.nodeName !== "TH" && target.nodeName !== "BUTTON") {
      console.log("Other EL")
      const butt = document.querySelector('.btn-to-delete')
      const tab = document.querySelector('.group')
      if (tab) { tab.parentNode.removeChild(tab) }
      if (butt) { butt.parentNode.removeChild(butt); }
    }
  }

  function showSelect(e) {
    target = e.target.parentNode;
    const targetClone = e.target.parentNode;
    console.log("Target after show", target)
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('tr');
    const rowsArray = Array.from(rows);
    const rowIndex = rowsArray.findIndex(row => row.contains(target));
    const columns = Array.from(rowsArray[rowIndex].querySelectorAll('th'));
    const columnIndex = columns.findIndex(column => column == target);
    console.log(rowIndex, columnIndex)

    const group = document.createElement('div')
    group.classList.add('group')
    group.style.position = "absolute"
    const addButt = document.createElement('button')
    addButt.innerHTML = 'Clone'
    addButt.classList.add('btn')
    addButt.classList.add('btn-primary')
    addButt.classList.add('btn-sm')
    addButt.addEventListener('click', () => {
      const clonedTh = targetClone.cloneNode(true)
      targetClone.after(clonedTh)
      const tableBody = document.querySelector('.table').tBodies[0];
      for (let i = 0; i < tableBody.rows.length; i++) {
        const toClone = tableBody.rows[i].cells[columnIndex]
        const clonedTd = toClone.cloneNode(true)
        console.log('After this', clonedTd)
        toClone.after(clonedTd)
      }
    })
    const removeButt = document.createElement('button')
    removeButt.innerHTML = 'Remove'
    removeButt.classList.add('btn')
    removeButt.classList.add('btn-primary')
    removeButt.classList.add('btn-sm')
    removeButt.addEventListener('click', () => {
      targetClone.parentNode.removeChild(targetClone)
      const tableBody = document.querySelector('.table').tBodies[0];
      for (let i = 0; i < tableBody.rows.length; i++) {
        const toClone = tableBody.rows[i].cells[columnIndex]
        toClone.parentNode.removeChild(toClone)
      }
    })
    group.appendChild(addButt)
    group.appendChild(removeButt)
    e.target.parentNode.appendChild(group)



    const tab = document.querySelector('.group')


  }


  function handleAddCol(e) {

    target = e.target.parentNode;
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('tr');
    const rowsArray = Array.from(rows);
    const rowIndex = rowsArray.findIndex(row => row.contains(target));
    const columns = Array.from(rowsArray[rowIndex].querySelectorAll('th'));
    const columnIndex = columns.findIndex(column => column == target);
    console.log(rowIndex, columnIndex)

    const head = document.querySelector('.table').tHead;
    const newEl = document.createElement('th');
    newEl.style.position = "relative"
    newEl.innerHTML = "NewHead"
    console.log('New El', newEl)
    newEl.addEventListener('click', () => { })
    target.after(newEl)
    const tableBody = document.querySelector('.table').tBodies[0];
    for (let i = 0; i < tableBody.rows.length; i++) {

      const toClone = tableBody.rows[i].cells[columnIndex]
      const clonedTd = toClone.cloneNode(true)
      console.log('After this', clonedTd)
      toClone.after(clonedTd)

    }
    const butt = document.querySelector('.btn-to-delete')
    if (butt) { butt.parentNode.removeChild(butt); }

  }
  function onMouseOverHandler(e) {
    target = e.target
    if (target.nodeName == "BUTTON") {
      return
    } else if (target.nodeName == "I") {
      return
    } else {
      highlight({ type: 'element', detail: target })
    }
    console.log("Target", target)
    //if (target.nodeName == "TH") {
    //  handleMousemove(e)
    //}
    handleMousemove(e)
  }




  return user == null ? (

    <div>
      <Test1 />
      <Test2 />
      <div className="container" onMouseOver={(e) => { onMouseOverHandler(e) }}   >
        <h2 className="text-center">UzitocnePage</h2>
        <div>
          <table className="table" >
            <thead >
              <tr>
                <th style={{ position: "relative" }}>Icon</th>


                <th style={{ position: "relative" }}>
                  First
                </th>
                <th style={{ position: "relative" }}>Last</th>
                <th style={{ position: "relative" }}>Handle</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td ><i class="fas fa-plus"></i></td>
                <td>Mark</td>
                <td>Otto</td>
                <td >@mdo</td>
              </tr>
              <tr>
                <td ><i class="fas fa-plus"></i></td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td >@fat</td>
              </tr>
              <tr>
                <td ><i class="fas fa-plus"></i></td>
                <td>Larry</td>
                <td>the Bird</td>
                <td >@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.TabBar}>
        <div
          className={tabID === 'components' ? styles.TabActive : styles.Tab}
          onClick={() => setTabID('components')}
        >
          <span
            className={styles.ReactIcon}
            role="img"
            aria-label="React Components tab button"
          >
            ⚛️
              </span>
              Components
            </div>
        <div
          className={tabID === 'profiler' ? styles.TabActive : styles.Tab}
          onClick={() => setTabID('profiler')}
        >
          <span
            className={styles.ReactIcon}
            role="img"
            aria-label="React Profiler tab button"
          >
            ⚛️
              </span>
              Profiler
            </div>
      </div>
      <div className={styles.DevTools}>
        <DevTools window={window} />
      </div>
    </div >
  ) : (
      <div>
        <div className="container">
          <h2 className="text-center">UzitocnePage</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" onMouseEnter={() => { setIsShown(true) }} onMouseLeave={() => setIsShown(false)}>First <button className="btn btn-primary">Edit</button></th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.TabBar}>
          <div
            className={tabID === 'components' ? styles.TabActive : styles.Tab}
            onClick={() => setTabID('components')}
          >
            <span
              className={styles.ReactIcon}
              role="img"
              aria-label="React Components tab button"
            >
              ⚛️
              </span>
              Components
            </div>
          <div
            className={tabID === 'profiler' ? styles.TabActive : styles.Tab}
            onClick={() => setTabID('profiler')}
          >
            <span
              className={styles.ReactIcon}
              role="img"
              aria-label="React Profiler tab button"
            >
              ⚛️
              </span>
              Profiler
            </div>
        </div>
        <div className={styles.DevTools}>

          <DevTools />
        </div>
      </div>
    );
};

export default UzitocnePage;
