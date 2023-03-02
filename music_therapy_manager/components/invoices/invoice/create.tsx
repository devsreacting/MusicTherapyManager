"use client";

/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Badge,
    Breadcrumb,
    Button,
    Card,
    Label,
    Table,
    Textarea,
    TextInput,
} from "flowbite-react";
import type { FC } from "react";
import { HiHome } from "react-icons/hi";
import NavbarSidebarLayout from "../../navagation/navbar-sidebar";

const InvoiceCreatePage: FC = function () {
    return (
        <NavbarSidebarLayout>
            <div className="mb-6 grid grid-cols-1 gap-y-6 px-4 pt-6 dark:border-gray-700 dark:bg-gray-900 xl:grid-cols-2 xl:gap-4">
                <div className="col-span-full">
                    <Breadcrumb className="mb-4">
                        <Breadcrumb.Item href="#">
                            <div className="flex items-center gap-x-3">
                                <HiHome className="text-xl" />
                                <span className="dark:text-white">Home</span>
                            </div>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/invoices">
                            Invoices
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Create Invoice</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        Create Invoice
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-y-6 px-4">
                <GeneralInfoCard />
                <CardDetailsCard />
            </div>
        </NavbarSidebarLayout>
    );
};


const GeneralInfoCard: FC = function () {
    return (
        <Card>
            <h3 className="mb-4 text-xl font-bold dark:text-white">
                General Information
            </h3>
            <form>
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="col-span-1 grid grid-cols-1 gap-y-3">
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <TextInput
                                id="first-name"
                                name="first-name"
                                placeholder="Bonnie"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="organization">Organization</Label>
                            <TextInput
                                id="organization"
                                name="organization"
                                placeholder="Company name"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="department">Department</Label>
                            <TextInput
                                id="department"
                                name="department"
                                placeholder="Development"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="city">City</Label>
                            <TextInput
                                id="city"
                                name="city"
                                placeholder="eg., San Francisco"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-span-1 grid grid-cols-1 gap-y-3">
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <TextInput
                                id="last-name"
                                name="last-name"
                                placeholder="Green"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="role">Role</Label>
                            <TextInput
                                id="role"
                                name="role"
                                placeholder="React Developer"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="country">Country</Label>
                            <TextInput
                                id="country"
                                name="country"
                                placeholder="United States"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="email">Email</Label>
                            <TextInput
                                id="email"
                                name="email"
                                placeholder="example@company.com"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-span-1 grid grid-cols-1 gap-y-2">
                        <Label htmlFor="info">Info</Label>
                        <Textarea
                            id="info"
                            name="info"
                            placeholder="Receipt Info (optional)"
                            rows={12}
                        />
                    </div>
                </div>
                <Button type="submit">Update</Button>
            </form>
        </Card>
    );
};

const CardDetailsCard: FC = function () {
    return (
        <Card>
            <h3 className="mb-4 text-xl font-bold dark:text-white">Card Details</h3>
            <form>
                <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="grid grid-cols-1 gap-y-2">
                        <Label htmlFor="full-name">(Full name as displayed on card)*</Label>
                        <TextInput
                            id="full-name"
                            name="full-name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-y-2">
                        <Label htmlFor="card-number">Card Number *</Label>
                        <TextInput
                            id="card-number"
                            name="card-number"
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-y-2">
                        <Label htmlFor="cvc">CVC *</Label>
                        <TextInput id="cvc" name="cvc" placeholder="•••" required />
                    </div>
                    <div className="grid grid-cols-1 gap-y-2">
                        <Label htmlFor="zip">Postal / ZIP code (optional)</Label>
                        <TextInput id="zip" name="zip" placeholder="e.g. 12345" required />
                    </div>
                </div>
                <Button color="primary">Update</Button>
            </form>
        </Card>
    );
};

export default InvoiceCreatePage;
