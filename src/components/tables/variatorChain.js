import React from "react";
import "./tables.css";

const VariatorChain = () => {
    return (
        <table className="myTable">
            <thead>
            <tr>
                <td rowSpan={3}>Тип вариатора</td>
                <td rowSpan={3}>Диапазон регулирования</td>
                <td colSpan={6}>Цепь</td>
                <td rowSpan={2}>Число звеньев</td>
            </tr>
            <tr>
                <td rowSpan={2}>Обозначение</td>
                <td>Шаг, мм</td>
                <td colSpan={4}>Размер пластин, мм</td>
            </tr>
            <tr>
                <td>t</td>
                <td>d</td>
                <td>b</td>
                <td>a</td>
                <td>E</td>
                <td>n</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td rowSpan={3}>ВЦ1А, ВЦ1Б</td>
                <td>3</td>
                <td>ВЦ225</td>
                <td rowSpan={3}>25.4 (26)</td>
                <td rowSpan={3}>37.6 (38)</td>
                <td rowSpan={3}>7.6 (7.8)</td>
                <td rowSpan={3}>30.7</td>
                <td rowSpan={3}>13.4</td>
                <td>25</td>
            </tr>
            <tr>
                <td>4.5</td>
                <td>ВЦ224</td>
                <td>24</td>
            </tr>
            <tr>
                <td>6</td>
                <td>ВЦ224</td>
                <td>24</td>
            </tr>
            <tr>
                <td rowSpan={3}>ВЦ2А, ВЦ2Б</td>
                <td>3</td>
                <td>ВЦ227</td>
                <td rowSpan={2}>29</td>
                <td rowSpan={2}>44.6 (44)</td>
                <td rowSpan={2}>9.2 (9.3)</td>
                <td rowSpan={2}>37.4</td>
                <td rowSpan={2}>16</td>
                <td>27</td>
            </tr>
            <tr>
                <td>4.5</td>
                <td>ВЦ226</td>
                <td>26</td>
            </tr>
            <tr>
                <td>6</td>
                <td>ВЦ228</td>
                <td>25.4 (26)</td>
                <td>37.6 (38)</td>
                <td>7.6 (7.8)</td>
                <td>30.7</td>
                <td>13.4</td>
                <td>28</td>
            </tr>
            <tr>
                <td rowSpan={3}>ВЦ3А, ВЦ3Б</td>
                <td>3</td>
                <td>ВЦ335</td>
                <td rowSpan={3}>29</td>
                <td rowSpan={3}>44.6 (44)</td>
                <td rowSpan={3}>9.2 (9.3)</td>
                <td rowSpan={3}>37.4</td>
                <td rowSpan={3}>16</td>
                <td>35</td>
            </tr>
            <tr>
                <td>4.5</td>
                <td>ВЦ334</td>
                <td>34</td>
            </tr>
            <tr>
                <td>6</td>
                <td>ВЦ333</td>
                <td>33</td>
            </tr>
            <tr>
                <td rowSpan={3}>ВЦ4А, ВЦ4Б</td>
                <td>3</td>
                <td>ВЦ434</td>
                <td rowSpan={3}>36.2 (36)</td>
                <td rowSpan={3}>59</td>
                <td rowSpan={3}>12.2 (12.3)</td>
                <td rowSpan={3}>52.4</td>
                <td rowSpan={3}>20.6</td>
                <td>34</td>
            </tr>
            <tr>
                <td>4.5</td>
                <td>ВЦ433</td>
                <td>33</td>
            </tr>
            <tr>
                <td>6</td>
                <td>ВЦ433</td>
                <td>33</td>
            </tr>
            <tr>
                <td rowSpan={3}>ВЦ5А, ВЦ5Б</td>
                <td>3</td>
                <td>ВЦ541</td>
                <td rowSpan={3}>36.2</td>
                <td rowSpan={3}>70.6 (70)</td>
                <td rowSpan={3}>12.2 (12.3)</td>
                <td rowSpan={3}>52.4</td>
                <td rowSpan={3}>20.6</td>
                <td>41</td>
            </tr>
            <tr>
                <td>4.5</td>
                <td>ВЦ540</td>
                <td>40</td>
            </tr>
            <tr>
                <td>6</td>
                <td>ВЦ539</td>
                <td>39</td>
            </tr>
            <tr>
                <td rowSpan={3}>ВЦ6А, ВЦ6Б</td>
                <td>3</td>
                <td>ВЦ637</td>
                <td rowSpan={3}>44</td>
                <td rowSpan={3}>77</td>
                <td rowSpan={3}>15.4</td>
                <td rowSpan={3}>70</td>
                <td rowSpan={3}>23.4</td>
                <td>37</td>
            </tr>
            <tr>
                <td>4.5</td>
                <td>ВЦ636</td>
                <td>36</td>
            </tr>
            <tr>
                <td>6</td>
                <td>ВЦ635</td>
                <td>35</td>
            </tr>
            </tbody>
        </table>
    )
};

export default VariatorChain;