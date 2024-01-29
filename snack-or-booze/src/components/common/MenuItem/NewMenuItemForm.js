import React from "react";
import { useState } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import "./NewMenuItemForm.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from "reactstrap";

function NewMenuItemForm({ addNewItem }) {
    const location = useLocation();
    const history = useHistory();
    const type = location.pathname.includes('snacks') ? 'snacks' : 'drinks';

    const INITIAL_STATE = {
        name: "",
        description: "",
        recipe: "",
        serve: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    // Form data change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        //do some stuff
        addNewItem(formData, type);
        setFormData(INITIAL_STATE);
        history.push(`/${type}`);
    };

    return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {`Add a New ${type[0].toUpperCase() + type.slice(1, -1)}`}
                    </CardTitle>
                    <CardText>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">
                                Name:
                                <textarea
                                    rows={2}
                                    cols={40}
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label htmlFor="description">
                                Description:
                                <textarea
                                    rows={2}
                                    cols={40}
                                    type="text"
                                    name="description"
                                    id="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label htmlFor="recipe">
                                Recipe:
                                <textarea
                                    rows={2}
                                    cols={40}
                                    name="recipe"
                                    id="recipe"
                                    value={formData.recipe}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label htmlFor="serve">
                                Serve:
                                <textarea
                                    rows={2}
                                    cols={40}
                                    type="text"
                                    name="serve"
                                    id="serve"
                                    value={formData.serve}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </CardText>
                </CardBody>
            </Card>
        </section>
    );
}

export default NewMenuItemForm;